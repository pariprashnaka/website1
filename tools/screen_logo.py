"""
Replace a green screen in a video with your logo, following the screen as the
camera moves or zooms.

Usage (Windows, from the project folder):
  pip install opencv-python numpy
  python tools\\screen_logo.py INPUT.mp4 LOGO.png OUTPUT.mp4 [--bg 0a0c10] [--debug]

How it works: every frame, find the green region, fit its four corners, bend the
logo (on a dark panel) to those corners, and blend it in with soft edges.
Limits: it expects the whole screen to be visible. If the screen runs past the
frame edge, trim the clip before that moment.
"""
import argparse, sys
import cv2
import numpy as np

ap = argparse.ArgumentParser()
ap.add_argument("inp"); ap.add_argument("logo"); ap.add_argument("out")
ap.add_argument("--bg", default="0a0c10", help="panel colour behind the logo, hex")
ap.add_argument("--logo-width", type=float, default=0.78, help="logo width as a fraction of the screen")
ap.add_argument("--smooth", type=float, default=0.6, help="0 = no smoothing, closer to 1 = smoother")
ap.add_argument("--grow", type=float, default=0.03, help="grow the screen outline by this fraction to cover edges")
ap.add_argument("--debug", action="store_true")
a = ap.parse_args()

cap = cv2.VideoCapture(a.inp)
if not cap.isOpened(): sys.exit("Cannot open input video")
fps = cap.get(cv2.CAP_PROP_FPS) or 30
W = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH)); H = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
logo = cv2.imread(a.logo, cv2.IMREAD_UNCHANGED)
if logo is None: sys.exit("Cannot open logo")
if logo.ndim == 2: logo = cv2.cvtColor(logo, cv2.COLOR_GRAY2BGRA)
if logo.shape[2] == 3: logo = cv2.cvtColor(logo, cv2.COLOR_BGR2BGRA)
bg = tuple(int(a.bg[i:i+2], 16) for i in (4, 2, 0))  # BGR

def order(pts):
    pts = np.array(pts, dtype=np.float32).reshape(-1, 2)
    s = pts.sum(1); d = np.diff(pts, axis=1).ravel()
    return np.array([pts[s.argmin()], pts[d.argmin()], pts[s.argmax()], pts[d.argmax()]], np.float32)  # tl,tr,br,bl

def find_quad(frame):
    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
    m = cv2.inRange(hsv, (35, 70, 50), (90, 255, 255))
    m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, np.ones((9, 9), np.uint8))
    m = cv2.morphologyEx(m, cv2.MORPH_OPEN, np.ones((5, 5), np.uint8))
    cs, _ = cv2.findContours(m, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    if not cs: return None, m
    c = max(cs, key=cv2.contourArea)
    if cv2.contourArea(c) < 0.002 * W * H: return None, m
    hull = cv2.convexHull(c)
    peri = cv2.arcLength(hull, True)
    for eps in (0.01, 0.02, 0.04, 0.06):
        ap_ = cv2.approxPolyDP(hull, eps * peri, True)
        if len(ap_) == 4: return order(ap_), m
    return order(cv2.boxPoints(cv2.minAreaRect(hull))), m

# panel canvas sized to the first detected screen's aspect ratio
quad0 = None
while quad0 is None:
    ok, f = cap.read()
    if not ok: sys.exit("No green screen found in the video")
    quad0, _ = find_quad(f)
w0 = (np.linalg.norm(quad0[1]-quad0[0]) + np.linalg.norm(quad0[2]-quad0[3])) / 2
h0 = (np.linalg.norm(quad0[3]-quad0[0]) + np.linalg.norm(quad0[2]-quad0[1])) / 2
ch = 720; cw = max(2, int(round(ch * w0 / max(h0, 1))))
panel = np.zeros((ch, cw, 4), np.uint8); panel[..., :3] = bg; panel[..., 3] = 255
lw = int(cw * a.logo_width); lh = int(lw * logo.shape[0] / logo.shape[1])
if lh > ch * 0.8: lh = int(ch * 0.8); lw = int(lh * logo.shape[1] / logo.shape[0])
lg = cv2.resize(logo, (lw, lh), interpolation=cv2.INTER_AREA)
x0, y0 = (cw - lw) // 2, (ch - lh) // 2
al = lg[..., 3:4].astype(np.float32) / 255
roi = panel[y0:y0+lh, x0:x0+lw, :3].astype(np.float32)
panel[y0:y0+lh, x0:x0+lw, :3] = (lg[..., :3] * al + roi * (1 - al)).astype(np.uint8)
panel_bgr = panel[..., :3]
src = np.array([[0, 0], [cw-1, 0], [cw-1, ch-1], [0, ch-1]], np.float32)

cap.set(cv2.CAP_PROP_POS_FRAMES, 0)
wr = cv2.VideoWriter(a.out, cv2.VideoWriter_fourcc(*"mp4v"), fps, (W, H))
prev = None; n = 0; miss = 0
while True:
    ok, f = cap.read()
    if not ok: break
    q, m = find_quad(f)
    if q is None:
        q = prev; miss += 1
    elif prev is not None:
        q = a.smooth * prev + (1 - a.smooth) * q
    if q is not None:
        prev = q
        c = q.mean(0)
        q = (c + (q - c) * (1 + a.grow)).astype(np.float32)
        Hm = cv2.getPerspectiveTransform(src, q.astype(np.float32))
        warped = cv2.warpPerspective(panel_bgr, Hm, (W, H), flags=cv2.INTER_LINEAR)
        mask = np.zeros((H, W), np.uint8)
        cv2.fillConvexPoly(mask, q.astype(np.int32), 255)
        mask = cv2.GaussianBlur(mask, (0, 0), 1.2).astype(np.float32)[..., None] / 255
        # remove green spill near the edge of the screen
        edge = cv2.dilate(mask, np.ones((9, 9), np.uint8))[..., None] if mask.ndim == 2 else cv2.dilate(mask[..., 0], np.ones((9, 9), np.uint8))[..., None]
        # leftover green just outside the screen (lower part, reflections): paint it with the panel colour
        big = (c + (q - c) * 1.28).astype(np.int32)
        region = np.zeros((H, W), np.uint8); cv2.fillConvexPoly(region, big, 255)
        hsv = cv2.cvtColor(f, cv2.COLOR_BGR2HSV)
        green = cv2.inRange(hsv, (30, 45, 25), (95, 255, 255))
        green = cv2.bitwise_and(green, region)
        green = cv2.dilate(green, np.ones((5, 5), np.uint8))
        green = cv2.GaussianBlur(green, (0, 0), 1.5).astype(np.float32)[..., None] / 255
        f = (np.array(bg, np.float32) * green + f.astype(np.float32) * (1 - green)).astype(np.uint8)
        fb = f.astype(np.float32)
        spill = np.minimum(fb[..., 1], (fb[..., 0] + fb[..., 2]) / 2)
        fb[..., 1] = np.where(edge[..., 0] > 0, spill, fb[..., 1])
        out = (warped.astype(np.float32) * mask + fb * (1 - mask)).astype(np.uint8)
        if a.debug: cv2.polylines(out, [q.astype(np.int32)], True, (0, 0, 255), 2)
        f = out
    wr.write(f); n += 1
wr.release(); cap.release()
print(f"Done: {n} frames, {miss} without a detected screen. Wrote {a.out}")
