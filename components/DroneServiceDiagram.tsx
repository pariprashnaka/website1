"use client";

export default function DroneServiceDiagram() {
  return (
    <div className="w-full h-full relative overflow-hidden" style={{ perspective: "900px", borderRadius: "16px" }}>
      <div className="sky-cycle absolute inset-0" />

      <div className="sun-glow" style={{ position: "absolute", top: "8%", left: "70%", width: 26, height: 26, borderRadius: "50%", background: "radial-gradient(circle, #FDE68A, #F59E0B 70%)", boxShadow: "0 0 20px 6px rgba(245,158,11,0.5)" }} />

      <div className="moon-glow" style={{ position: "absolute", top: "8%", left: "70%", width: 20, height: 20, borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, #F1F5F9, #CBD5E1 75%)", boxShadow: "0 0 16px 4px rgba(203,213,225,0.4)" }} />

      <div className="stars">
        <div style={{ position: "absolute", top: "14%", left: "20%", width: 2, height: 2, borderRadius: "50%", background: "white" }} />
        <div style={{ position: "absolute", top: "22%", left: "40%", width: 2, height: 2, borderRadius: "50%", background: "white" }} />
        <div style={{ position: "absolute", top: "10%", left: "55%", width: 1.6, height: 1.6, borderRadius: "50%", background: "white" }} />
        <div style={{ position: "absolute", top: "26%", left: "12%", width: 1.6, height: 1.6, borderRadius: "50%", background: "white" }} />
      </div>

      <div
        className="absolute"
        style={{
          left: "-50%",
          right: "-50%",
          bottom: "-25%",
          height: "170%",
          background:
            "repeating-linear-gradient(180deg, rgba(34,197,94,0.4) 0px, rgba(34,197,94,0.4) 14px, rgba(21,128,61,0.32) 14px, rgba(21,128,61,0.32) 28px)",
          transform: "rotateX(58deg)",
          transformOrigin: "bottom",
          borderRadius: "8px",
          boxShadow: "0 30px 60px -20px rgba(15,23,42,0.25)",
        }}
      >
        <div className="drone-shadow" style={{ position: "absolute", width: 28, height: 13, borderRadius: "50%", background: "rgba(0,0,0,0.4)", filter: "blur(3px)" }} />
        <div className="field-night-overlay absolute inset-0" style={{ borderRadius: "8px" }} />
      </div>

      <div className="drone-wrapper" style={{ position: "absolute" }}>
        <svg width="46" height="42" viewBox="0 0 46 42" style={{ overflow: "visible" }}>
          <ellipse cx="8" cy="10" rx="7" ry="3" fill="rgba(30,41,59,0.18)" />
          <ellipse cx="38" cy="10" rx="7" ry="3" fill="rgba(30,41,59,0.18)" />
          <ellipse cx="6" cy="32" rx="8.5" ry="3.5" fill="rgba(30,41,59,0.2)" />
          <ellipse cx="40" cy="32" rx="8.5" ry="3.5" fill="rgba(30,41,59,0.2)" />

          <path d="M20 21 L8 10" stroke="#334155" strokeWidth="3.4" strokeLinecap="round" />
          <path d="M26 21 L38 10" stroke="#334155" strokeWidth="3.4" strokeLinecap="round" />
          <path d="M18 25 L6 32" stroke="#334155" strokeWidth="3.6" strokeLinecap="round" />
          <path d="M28 25 L40 32" stroke="#334155" strokeWidth="3.6" strokeLinecap="round" />

          <circle cx="8" cy="10" r="3" fill="#1E293B" />
          <circle cx="38" cy="10" r="3" fill="#1E293B" />
          <circle cx="6" cy="32" r="3.4" fill="#1E293B" />
          <circle cx="40" cy="32" r="3.4" fill="#1E293B" />

          <line x1="17" y1="27" x2="15" y2="34" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          <line x1="29" y1="27" x2="31" y2="34" stroke="#475569" strokeWidth="2" strokeLinecap="round" />

          <rect x="15" y="14" width="16" height="13" rx="4" fill="#E2E8F0" stroke="#1E293B" strokeWidth="1.6" />
          <rect x="18" y="17" width="10" height="4" rx="1.5" fill="#0EA5E9" opacity="0.85" />

          <circle cx="23" cy="29" r="2.6" fill="#1E293B" />
          <circle cx="23" cy="29" r="1.1" fill="#0EA5E9" />
        </svg>

        <div className="spray-particle spray-1" />
        <div className="spray-particle spray-2" />
        <div className="spray-particle spray-3" />
      </div>

      <style>{`
        .drone-wrapper { animation: droneFly 14s linear infinite; transform-origin: center; }

        .sky-cycle { animation: skyCycle 14s linear infinite; }
        @keyframes skyCycle {
          0%   { background: linear-gradient(to bottom, #BAE6FD, rgba(186,230,253,0.15) 55%); }
          30%  { background: linear-gradient(to bottom, #93C5FD, rgba(147,197,253,0.15) 55%); }
          45%  { background: linear-gradient(to bottom, #FDBA74, rgba(253,186,116,0.15) 55%); }
          58%  { background: linear-gradient(to bottom, #4C1D95, rgba(76,29,149,0.15) 55%); }
          72%  { background: linear-gradient(to bottom, #0F172A, rgba(15,23,42,0.15) 55%); }
          88%  { background: linear-gradient(to bottom, #1E293B, rgba(30,41,59,0.15) 55%); }
          100% { background: linear-gradient(to bottom, #BAE6FD, rgba(186,230,253,0.15) 55%); }
        }

        .sun-glow { animation: sunCycle 14s linear infinite; }
        @keyframes sunCycle {
          0%   { opacity: 0;   left: 10%; top: 38%; }
          8%   { opacity: 0.85; left: 20%; top: 22%; }
          25%  { opacity: 1;   left: 48%; top: 5%; }
          42%  { opacity: 0.85; left: 76%; top: 22%; }
          50%  { opacity: 0;   left: 86%; top: 38%; }
          100% { opacity: 0;   left: 86%; top: 38%; }
        }

        .moon-glow { animation: moonCycle 14s linear infinite; }
        @keyframes moonCycle {
          0%   { opacity: 0;   left: 10%; top: 38%; }
          50%  { opacity: 0;   left: 10%; top: 38%; }
          58%  { opacity: 0.85; left: 20%; top: 22%; }
          75%  { opacity: 1;   left: 48%; top: 5%; }
          92%  { opacity: 0.85; left: 76%; top: 22%; }
          100% { opacity: 0;   left: 86%; top: 38%; }
        }

        .stars { animation: starsCycle 14s linear infinite; }
        @keyframes starsCycle {
          0%   { opacity: 0; }
          55%  { opacity: 0; }
          65%  { opacity: 1; }
          92%  { opacity: 1; }
          100% { opacity: 0; }
        }

        .field-night-overlay { animation: fieldNightCycle 14s linear infinite; background: #0F172A; pointer-events: none; }
        @keyframes fieldNightCycle {
          0%   { opacity: 0; }
          45%  { opacity: 0; }
          65%  { opacity: 0.55; }
          85%  { opacity: 0.55; }
          100% { opacity: 0; }
        }
        .drone-shadow { animation: droneShadowMove 14s linear infinite; }

        @keyframes droneFly {
          0%    { left: 4%;  top: 6%;  transform: scale(0.5); }
          7%    { left: 80%; top: 6%;  transform: scale(0.5); }
          14.3% { left: 80%; top: 17%; transform: scale(0.6); }
          21%   { left: 4%;  top: 17%; transform: scale(0.6); }
          28.6% { left: 4%;  top: 28%; transform: scale(0.7); }
          35%   { left: 80%; top: 28%; transform: scale(0.7); }
          42.9% { left: 80%; top: 40%; transform: scale(0.8); }
          49%   { left: 4%;  top: 40%; transform: scale(0.8); }
          57.1% { left: 4%;  top: 52%; transform: scale(0.92); }
          63%   { left: 80%; top: 52%; transform: scale(0.92); }
          71.4% { left: 80%; top: 65%; transform: scale(1.05); }
          77%   { left: 4%;  top: 65%; transform: scale(1.05); }
          85.7% { left: 4%;  top: 80%; transform: scale(1.2); }
          92%   { left: 80%; top: 80%; transform: scale(1.2); }
          100%  { left: 4%;  top: 6%;  transform: scale(0.5); }
        }
        @keyframes droneShadowMove {
          0%    { left: 6%;  top: 10%; }
          7%    { left: 78%; top: 10%; }
          14.3% { left: 78%; top: 22%; }
          21%   { left: 6%;  top: 22%; }
          28.6% { left: 6%;  top: 34%; }
          35%   { left: 78%; top: 34%; }
          42.9% { left: 78%; top: 46%; }
          49%   { left: 6%;  top: 46%; }
          57.1% { left: 6%;  top: 58%; }
          63%   { left: 78%; top: 58%; }
          71.4% { left: 78%; top: 70%; }
          77%   { left: 6%;  top: 70%; }
          85.7% { left: 6%;  top: 84%; }
          92%   { left: 78%; top: 84%; }
          100%  { left: 6%;  top: 10%; }
        }

        .spray-particle {
          position: absolute;
          left: 20px;
          top: 32px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #F8FAFC;
          box-shadow: 0 0 4px 1px rgba(15,23,42,0.35);
          animation: sprayFall 1.1s ease-in infinite;
        }
        .spray-1 { animation-delay: 0s; }
        .spray-2 { animation-delay: 0.35s; left: 15px; }
        .spray-3 { animation-delay: 0.7s; left: 26px; }
        @keyframes sprayFall {
          0% { opacity: 0.95; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(18px) scale(0.35); }
        }
      `}</style>
    </div>
  );
}
