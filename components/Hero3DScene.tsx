"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const NODE_DATA = [
  { label: "Browser", x: -4.5, y: 2.2, z: -1, color: 0x3b82f6 },
  { label: "Gateway", x: 0, y: 3, z: -2, color: 0x3b82f6 },
  { label: "Auth", x: 4.5, y: 2.2, z: -1, color: 0x22c55e },
  { label: "ERP", x: -4.5, y: -0.5, z: 0, color: 0xf59e0b },
  { label: "AI Engine", x: 0, y: -1, z: 1, color: 0x7c3aed },
  { label: "CRM", x: 4.5, y: -0.5, z: 0, color: 0xef4444 },
  { label: "Database", x: -2.2, y: -3.2, z: -1, color: 0x3b82f6 },
  { label: "Queue", x: 2.2, y: -3.2, z: -1, color: 0x22c55e },
];

const EDGE_LIST: [number, number][] = [
  [0, 1], [1, 2], [1, 3], [1, 4], [1, 5], [3, 6], [4, 6], [4, 7], [5, 7], [6, 7],
];

export default function Hero3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldRender3D, setShouldRender3D] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const update = () => setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    const isWideEnough = window.innerWidth >= 1024;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reading window size and OS motion preference, both browser-only APIs unavailable during SSR; required for correct initial capability check
    setShouldRender3D(isWideEnough && !prefersReducedMotion);
    setChecked(true);
  }, []);

  useEffect(() => {
    if (!shouldRender3D) return;
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const bgColor = document.documentElement.getAttribute("data-theme") === "dark" ? 0x05070a : 0xF1F4F9;
    scene.fog = new THREE.FogExp2(bgColor, 0.065);

    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 15);

    const useDarkBg = document.documentElement.getAttribute("data-theme") === "dark";
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: !useDarkBg });
    renderer.setClearColor(0x05070a, useDarkBg ? 1 : 0);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0x1a1f2e, 1.4));
    const keyLight = new THREE.PointLight(0x3b82f6, 1.8, 20);
    keyLight.position.set(4, 3, 6);
    scene.add(keyLight);
    const rimLight = new THREE.PointLight(0x7c3aed, 1.1, 20);
    rimLight.position.set(-5, -2, 4);
    scene.add(rimLight);

    const nodes: {
      mesh: THREE.Mesh;
      base: { x: number; y: number; z: number };
      speed: number;
      offset: number;
      rippleOffset: THREE.Vector3;
      rippleVelocity: THREE.Vector3;
    }[] = [];
    const nodeGroup = new THREE.Group();
    // Card boxes removed — only position data kept so particles travel correctly
    NODE_DATA.forEach((n) => {
      const placeholder = new THREE.Object3D();
      placeholder.position.set(n.x, n.y, n.z);
      nodes.push({
        mesh: new THREE.Mesh(new THREE.BufferGeometry()),
        base: { x: n.x, y: n.y, z: n.z },
        speed: 0.25 + Math.random() * 0.3,
        offset: Math.random() * Math.PI * 2,
        rippleOffset: new THREE.Vector3(0, 0, 0),
        rippleVelocity: new THREE.Vector3(0, 0, 0),
      });
    });
    // nodeGroup not added to scene — boxes invisible

    const particles: {
      mesh: THREE.Mesh;
      a: { x: number; y: number; z: number };
      b: { x: number; y: number; z: number };
      t: number;
      speed: number;
      cursorOffset: THREE.Vector3;
    }[] = [];
    const lineGroup = new THREE.Group();

    EDGE_LIST.forEach(([a, b]) => {
      const pA = NODE_DATA[a];
      const pB = NODE_DATA[b];
      const points = [new THREE.Vector3(pA.x, pA.y, pA.z), new THREE.Vector3(pB.x, pB.y, pB.z)];
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.1 });
      lineGroup.add(new THREE.Line(geo, mat));

      const particleGeo = new THREE.SphereGeometry(0.045, 8, 8);
      const particleMat = new THREE.MeshBasicMaterial({ color: 0x00d4ff, transparent: true, opacity: 0.85, depthTest: true });
      const particle = new THREE.Mesh(particleGeo, particleMat);
      particle.renderOrder = 1;
      scene.add(particle);
      particles.push({ mesh: particle, a: pA, b: pB, t: Math.random(), speed: 0.12 + Math.random() * 0.15, cursorOffset: new THREE.Vector3(0, 0, 0) });
    });
    scene.add(lineGroup);

    const starGeo = new THREE.BufferGeometry();
    const starCount = 300;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) starPos[i] = (Math.random() - 0.5) * 40;
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0x334155, size: 0.025 }));
    scene.add(stars);

    let mouseX = 0;
    let mouseY = 0;
    const mouseWorld = new THREE.Vector3();
    const raycaster = new THREE.Raycaster();
    const mouse2D = new THREE.Vector2();
    const interactionPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

    function getRect() {
      return container!.getBoundingClientRect();
    }

    function onMouseMove(e: MouseEvent) {
      const rect = getRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      mouse2D.set(mouseX, -mouseY);
      raycaster.setFromCamera(mouse2D, camera);
      raycaster.ray.intersectPlane(interactionPlane, mouseWorld);
    }
    container.addEventListener("mousemove", onMouseMove);

    const ripples: { mesh: THREE.Mesh; age: number }[] = [];
    function onClick(e: MouseEvent) {
      const rect = getRect();
      mouse2D.set(((e.clientX - rect.left) / rect.width - 0.5) * 2, -((e.clientY - rect.top) / rect.height - 0.5) * 2);
      raycaster.setFromCamera(mouse2D, camera);
      const clickPoint = new THREE.Vector3();
      raycaster.ray.intersectPlane(interactionPlane, clickPoint);
      if (!clickPoint) return;

      const ringGeo = new THREE.RingGeometry(0.1, 0.16, 32);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0x00d4ff, transparent: true, opacity: 0.6, side: THREE.DoubleSide });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(clickPoint);
      scene.add(ring);
      ripples.push({ mesh: ring, age: 0 });

      const MAX_RIPPLES = 5;
      while (ripples.length > MAX_RIPPLES) {
        const oldest = ripples.shift();
        if (oldest) {
          scene.remove(oldest.mesh);
          oldest.mesh.geometry.dispose();
          (oldest.mesh.material as THREE.Material).dispose();
        }
      }

      nodes.forEach((n) => {
        const nodePos = new THREE.Vector3(n.base.x, n.base.y, n.base.z);
        const dist = nodePos.distanceTo(clickPoint);
        if (dist < 6) {
          const force = (1 - dist / 6) * 0.8;
          const dir = nodePos.clone().sub(clickPoint).normalize();
          n.rippleVelocity.add(dir.multiplyScalar(force));
        }
      });
    }
    container.addEventListener("click", onClick);

    const clock = new THREE.Clock();
    let elapsedTime = 0;
    let rafId: number;
    let isActive = true;

    function animate() {
      if (!isActive) return;
      rafId = requestAnimationFrame(animate);
      const dt = Math.min(clock.getDelta(), 0.05);
      elapsedTime += dt;
      const t = elapsedTime;

      nodes.forEach((n) => {
        n.rippleVelocity.multiplyScalar(0.92);
        n.rippleOffset.add(n.rippleVelocity.clone().multiplyScalar(dt));
        n.rippleOffset.multiplyScalar(0.94);
        const floatY = Math.sin(t * n.speed + n.offset) * 0.12;
        n.mesh.position.set(n.base.x + n.rippleOffset.x, n.base.y + floatY + n.rippleOffset.y, n.base.z + n.rippleOffset.z);
        n.mesh.rotation.y = Math.sin(t * 0.15 + n.offset) * 0.06;
      });

      particles.forEach((p) => {
        p.t += p.speed * 0.01;
        if (p.t > 1) p.t = 0;
        const basePos = new THREE.Vector3().lerpVectors(
          new THREE.Vector3(p.a.x, p.a.y, p.a.z),
          new THREE.Vector3(p.b.x, p.b.y, p.b.z),
          p.t
        );
        const distToCursor = basePos.distanceTo(mouseWorld);
        if (distToCursor < 2.5) {
          const pushDir = basePos.clone().sub(mouseWorld).normalize();
          const strength = (1 - distToCursor / 2.5) * 0.6;
          p.cursorOffset.lerp(pushDir.multiplyScalar(strength), 0.15);
        } else {
          p.cursorOffset.lerp(new THREE.Vector3(0, 0, 0), 0.08);
        }
        p.mesh.position.copy(basePos).add(p.cursorOffset);
      });

      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.age += dt;
        const scale = 1 + r.age * 4;
        r.mesh.scale.set(scale, scale, scale);
        (r.mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.6 - r.age * 0.5);
        r.mesh.lookAt(camera.position);
        if (r.age > 1.4) {
          scene.remove(r.mesh);
          r.mesh.geometry.dispose();
          (r.mesh.material as THREE.Material).dispose();
          ripples.splice(i, 1);
        }
      }

      camera.position.x += (mouseX * 1.3 - camera.position.x) * 0.02;
      camera.position.y += (-mouseY * 0.8 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);

      nodeGroup.rotation.y = Math.sin(t * 0.06) * 0.06;
      lineGroup.rotation.y = nodeGroup.rotation.y;
      stars.rotation.y = t * 0.008;

      renderer.render(scene, camera);
    }
    animate();

    function onResize() {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    }
    window.addEventListener("resize", onResize);

    return () => {
      isActive = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("click", onClick);

      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.LineSegments || obj instanceof THREE.Line || obj instanceof THREE.Points) {
          obj.geometry?.dispose();
          const mat = obj.material;
          if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
          else mat?.dispose();
        }
      });
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [shouldRender3D, isDark]);

  if (!checked) return <div className="w-full h-full" />;

  if (!shouldRender3D) {
    return (
      <div
        className="w-full h-full"
        style={{
          background:
            `radial-gradient(circle at 30% 30%, rgba(59,130,246,0.18), transparent 55%), radial-gradient(circle at 75% 70%, rgba(124,58,237,0.14), transparent 55%), ${isDark ? "#05070A" : "#F1F4F9"}`,
        }}
      />
    );
  }

  return <div ref={containerRef} className="w-full h-full" />;
}
