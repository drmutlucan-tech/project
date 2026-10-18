import { useReveal } from '@/hooks/useReveal';
import { useI18n } from '@/i18n';
import {
  Cpu,
  Wifi,
  TrafficCone,
  Wind,
  Droplets,
  Lightbulb,
  Camera,
  Satellite,
  Monitor,
} from 'lucide-react';

export function SmartCityViz() {
  const { t } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>();

  // Far layer buildings (repeated for seamless loop of 1200px)
  const farBuildings = [
    { x: 0, y: 160, w: 60, h: 200, color: '#1a2a45' },
    { x: 65, y: 190, w: 45, h: 170, color: '#1a2a45' },
    { x: 115, y: 140, w: 70, h: 220, color: '#1e3050' },
    { x: 190, y: 175, w: 50, h: 185, color: '#1a2a45' },
    { x: 245, y: 120, w: 55, h: 240, color: '#1e3050' },
    { x: 305, y: 165, w: 60, h: 195, color: '#1a2a45' },
    { x: 370, y: 145, w: 45, h: 215, color: '#1e3050' },
    { x: 420, y: 185, w: 65, h: 175, color: '#1a2a45' },
    { x: 490, y: 130, w: 50, h: 230, color: '#1e3050' },
    { x: 545, y: 170, w: 55, h: 190, color: '#1a2a45' },
    { x: 605, y: 150, w: 70, h: 210, color: '#1e3050' },
    { x: 680, y: 180, w: 50, h: 180, color: '#1a2a45' },
    { x: 735, y: 135, w: 60, h: 225, color: '#1e3050' },
    { x: 800, y: 165, w: 50, h: 195, color: '#1a2a45' },
    { x: 855, y: 145, w: 65, h: 215, color: '#1e3050' },
    { x: 925, y: 180, w: 45, h: 180, color: '#1a2a45' },
    { x: 975, y: 125, w: 55, h: 235, color: '#1e3050' },
    { x: 1035, y: 170, w: 60, h: 190, color: '#1a2a45' },
    { x: 1100, y: 155, w: 50, h: 205, color: '#1e3050' },
    { x: 1155, y: 140, w: 45, h: 220, color: '#1a2a45' },
  ];

  // Near layer buildings (foreground, taller, more detailed)
  const nearBuildings = [
    { x: 0, y: 130, w: 70, h: 230, color: '#243a5e' },
    { x: 75, y: 165, w: 55, h: 195, color: '#243a5e' },
    { x: 135, y: 100, w: 65, h: 260, color: '#2a4268' },
    { x: 205, y: 145, w: 50, h: 215, color: '#243a5e' },
    { x: 260, y: 115, w: 75, h: 245, color: '#2a4268' },
    { x: 340, y: 160, w: 55, h: 200, color: '#243a5e' },
    { x: 400, y: 125, w: 60, h: 235, color: '#2a4268' },
    { x: 465, y: 150, w: 70, h: 210, color: '#243a5e' },
    { x: 540, y: 105, w: 50, h: 255, color: '#2a4268' },
    { x: 595, y: 140, w: 65, h: 220, color: '#243a5e' },
    { x: 665, y: 120, w: 55, h: 240, color: '#2a4268' },
    { x: 725, y: 155, w: 60, h: 205, color: '#243a5e' },
    { x: 790, y: 130, w: 70, h: 230, color: '#2a4268' },
    { x: 865, y: 145, w: 50, h: 215, color: '#243a5e' },
    { x: 920, y: 110, w: 60, h: 250, color: '#2a4268' },
    { x: 985, y: 165, w: 55, h: 195, color: '#243a5e' },
    { x: 1045, y: 125, w: 70, h: 235, color: '#2a4268' },
    { x: 1120, y: 150, w: 50, h: 210, color: '#243a5e' },
  ];

  // Vehicles with lane, speed, and detection timing
  const vehicles = [
    { lane: 0, offset: 0, type: 'car', color: '#7fa8ff', detectDelay: 0 },
    { lane: 0, offset: 400, type: 'car', color: '#b9d0ff', detectDelay: 2.5 },
    { lane: 0, offset: 800, type: 'truck', color: '#4f7ff5', detectDelay: 1.2 },
    { lane: 1, offset: 200, type: 'car', color: '#d2e0ff', detectDelay: 1.8 },
    { lane: 1, offset: 600, type: 'car', color: '#7fa8ff', detectDelay: 0.5 },
    { lane: 1, offset: 950, type: 'truck', color: '#5e8df5', detectDelay: 3.2 },
  ];

  // Sensor positions (relative to the fixed overlay, not scrolling)
  const sensors = [
    { x: 120, y: 130, icon: TrafficCone, label: 'TRAFFIC', color: '#4f7ff5', delay: 0 },
    { x: 300, y: 95, icon: Wind, label: 'AIR', color: '#7fa8ff', delay: 0.5 },
    { x: 500, y: 130, icon: Droplets, label: 'WATER', color: '#b9d0ff', delay: 1.0 },
    { x: 680, y: 95, icon: Lightbulb, label: 'LIGHT', color: '#7fa8ff', delay: 1.5 },
  ];

  // Stars
  const stars = Array.from({ length: 40 }).map((_, i) => ({
    x: (i * 137) % 1200,
    y: (i * 47) % 90 + 5,
    delay: (i * 0.3) % 3,
    r: 0.4 + (i % 3) * 0.3,
  }));

  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''} relative w-full mb-20`}>
      <div className="relative rounded-card border border-white/8 bg-gradient-to-b from-[#0d1a2e] via-[#152844] to-[#1d2f4a] overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-bioluminescent/6 blur-4xl" />
          <div className="absolute bottom-[10%] left-[20%] w-[200px] h-[150px] rounded-full bg-lavender-phosphor/5 blur-3xl" />
        </div>

        <svg viewBox="0 0 1200 400" className="w-full h-auto relative block" role="img" aria-label="Akıllı Şehir — Canlı IoT ve Trafik İzleme">

          {/* ===== Sky & Stars ===== */}
          <rect x="0" y="0" width="1200" height="360" fill="transparent" />
          {stars.map((s, i) => (
            <circle key={`star-${i}`} cx={s.x} cy={s.y} r={s.r} fill="#b9d0ff" className="sc-twinkle" style={{ animationDelay: `${s.delay}s` }} />
          ))}

          {/* ===== Far Building Layer (slow parallax) ===== */}
          <g className="sc-pan-far">
            {/* Render twice for seamless loop */}
            {[0, 1200].map((offset) => (
              <g key={`far-${offset}`} transform={`translate(${offset}, 0)`}>
                {farBuildings.map((b, i) => (
                  <g key={`fb-${offset}-${i}`}>
                    <rect x={b.x} y={b.y} width={b.w} height={b.h} fill={b.color} rx="2" />
                    {/* Windows */}
                    {Array.from({ length: Math.floor(b.h / 18) }).map((_, row) =>
                      Array.from({ length: Math.floor(b.w / 14) }).map((_, col) => (
                        <rect
                          key={`fw-${offset}-${i}-${row}-${col}`}
                          x={b.x + 4 + col * 14} y={b.y + 6 + row * 18}
                          width="7" height="9" rx="1"
                          fill="#4f7ff5"
                          className="sc-window"
                          style={{ animationDelay: `${(row * 0.3 + col * 0.15 + i * 0.2) % 4}s` }}
                        />
                      ))
                    )}
                  </g>
                ))}
              </g>
            ))}
          </g>

          {/* ===== Near Building Layer (faster parallax) ===== */}
          <g className="sc-pan-near">
            {[0, 1200].map((offset) => (
              <g key={`near-${offset}`} transform={`translate(${offset}, 0)`}>
                {nearBuildings.map((b, i) => (
                  <g key={`nb-${offset}-${i}`}>
                    <rect x={b.x} y={b.y} width={b.w} height={b.h} fill={b.color} rx="3" />
                    {/* Building edge highlight */}
                    <rect x={b.x} y={b.y} width={b.w} height="2" fill="rgba(79,127,245,0.15)" rx="1" />
                    {/* Windows grid */}
                    {Array.from({ length: Math.floor(b.h / 22) }).map((_, row) =>
                      Array.from({ length: Math.floor(b.w / 16) }).map((_, col) => (
                        <rect
                          key={`nw-${offset}-${i}-${row}-${col}`}
                          x={b.x + 5 + col * 16} y={b.y + 8 + row * 22}
                          width="9" height="12" rx="1.5"
                          fill={col % 2 === 0 ? '#7fa8ff' : '#b9d0ff'}
                          className="sc-window"
                          style={{ animationDelay: `${(row * 0.4 + col * 0.2 + i * 0.3) % 4}s` }}
                        />
                      ))
                    )}
                    {/* Antenna on tall buildings */}
                    {b.h > 220 && (
                      <line x1={b.x + b.w / 2} y1={b.y} x2={b.x + b.w / 2} y2={b.y - 15} stroke="rgba(79,127,245,0.3)" strokeWidth="1" />
                    )}
                  </g>
                ))}
              </g>
            ))}
          </g>

          {/* ===== Road Layer ===== */}
          <rect x="0" y="360" width="1200" height="40" fill="#111f33" />
          {/* Road edge lines */}
          <line x1="0" y1="360" x2="1200" y2="360" stroke="rgba(79,127,245,0.25)" strokeWidth="1.5" />
          <line x1="0" y1="380" x2="1200" y2="380" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="20 16" />
          <line x1="0" y1="398" x2="1200" y2="398" stroke="rgba(79,127,245,0.15)" strokeWidth="1" />

          {/* ===== Moving Vehicles (traffic) ===== */}
          {vehicles.map((v, i) => {
            const y = v.lane === 0 ? 368 : 388;
            const w = v.type === 'truck' ? 28 : 20;
            const h = v.type === 'truck' ? 12 : 9;
            return (
              <g key={`veh-${i}`} className="sc-pan-near" style={{ animationDuration: `${24 - v.lane * 3}s` }}>
                {[0, 1200].map((offset) => (
                  <g key={`vh-${i}-${offset}`} transform={`translate(${v.offset + offset}, ${y})`}>
                    {/* Vehicle body */}
                    <rect x="0" y="0" width={w} height={h} rx="2" fill={v.color} opacity="0.85" />
                    {/* Headlights */}
                    <circle cx={w} cy={h * 0.3} r="1.5" fill="#fffacc" opacity="0.9" />
                    <circle cx={w} cy={h * 0.7} r="1.5" fill="#fffacc" opacity="0.9" />
                    {/* AI detection box */}
                    <g className="sc-detect" style={{ animationDelay: `${v.detectDelay}s` }}>
                      <rect x="-3" y="-4" width={w + 6} height={h + 8} fill="none" stroke="#00d4ff" strokeWidth="1" rx="3" opacity="0.9" />
                      <text x={w + 4} y="-1" fill="#00d4ff" fontSize="5" fontWeight="600" letterSpacing="0.3" opacity="0.9">
                        ID:{1000 + i}
                      </text>
                    </g>
                  </g>
                ))}
              </g>
            );
          })}

          {/* ===== AI Surveillance Camera (fixed, right side) ===== */}
          <g transform="translate(1100, 100)">
            {/* Camera pole */}
            <line x1="0" y1="0" x2="0" y2="45" stroke="rgba(79,127,245,0.3)" strokeWidth="2" />
            <line x1="0" y1="0" x2="-15" y2="0" stroke="rgba(79,127,245,0.3)" strokeWidth="2" />
            {/* Camera body */}
            <rect x="-22" y="-8" width="20" height="14" rx="3" fill="rgba(36,54,85,0.95)" stroke="#4f7ff5" strokeWidth="1" />
            <circle cx="-12" cy="-1" r="3" fill="#0d1a2e" stroke="#00d4ff" strokeWidth="1" />
            <circle cx="-12" cy="-1" r="1.5" fill="#00d4ff" className="sc-sensor-pulse" />
            {/* REC indicator */}
            <circle cx="-19" cy="-5" r="1.2" fill="#ff4444" className="sc-rec" />
            {/* Scanning cone — oscillating */}
            <g transform="translate(-12, -1)" className="sc-scan-cone">
              <path d="M 0 0 L 40 25 L 40 -25 Z" fill="rgba(0,212,255,0.06)" stroke="rgba(0,212,255,0.15)" strokeWidth="0.5" />
              <path d="M 0 0 L 40 0" stroke="rgba(0,212,255,0.2)" strokeWidth="0.5" strokeDasharray="2 3" />
            </g>
            {/* Label */}
            <text x="-18" y="58" fill="#b9d0ff" fontSize="6" fontWeight="500" letterSpacing="0.5" opacity="0.6">AI CAM</text>
          </g>

          {/* ===== Central AI Hub (fixed, center-top) ===== */}
          <g transform="translate(600, 180)">
            {/* Glow */}
            <circle cx="0" cy="0" r="55" fill="rgba(79,127,245,0.08)" />

            {/* Rotating ring 1 */}
            <g className="sc-hub-ring-1">
              <circle cx="0" cy="0" r="48" fill="none" stroke="rgba(79,127,245,0.2)" strokeWidth="1" strokeDasharray="3 6" />
              <circle cx="48" cy="0" r="2.5" fill="#4f7ff5" />
            </g>
            {/* Rotating ring 2 */}
            <g className="sc-hub-ring-2">
              <circle cx="0" cy="0" r="38" fill="none" stroke="rgba(127,168,255,0.15)" strokeWidth="1" strokeDasharray="2 5" />
              <circle cx="-38" cy="0" r="2" fill="#b9d0ff" />
            </g>
            {/* Static ring */}
            <circle cx="0" cy="0" r="30" fill="none" stroke="rgba(79,127,245,0.1)" strokeWidth="1" />

            {/* Core */}
            <g className="sc-hub-core">
              <rect x="-18" y="-18" width="36" height="36" rx="6" fill="rgba(13,26,46,0.95)" stroke="#4f7ff5" strokeWidth="1.5" />
              <Cpu size={16} x={-8} y={-8} className="text-bioluminescent" />
            </g>

            {/* Label */}
            <text x="0" y="38" textAnchor="middle" fill="#b9d0ff" fontSize="7" fontWeight="500" letterSpacing="1.5" opacity="0.7">
              AI CORE
            </text>
          </g>

          {/* ===== Data Streams from sensors to AI hub ===== */}
          {sensors.map((s, i) => (
            <line
              key={`stream-${i}`}
              x1={s.x} y1={s.y}
              x2="600" y2="180"
              stroke={s.color}
              strokeWidth="1"
              opacity="0.25"
              strokeDasharray="3 30"
              className="sc-data-stream"
              style={{ animationDelay: `${s.delay}s` }}
            />
          ))}

          {/* ===== Fixed Sensor Nodes (overlay, don't scroll) ===== */}
          {sensors.map((s, i) => (
            <g key={`sensor-${i}`} transform={`translate(${s.x}, ${s.y})`}>
              {/* Expanding ring */}
              <circle cx="0" cy="0" r="10" fill="none" stroke={s.color} strokeWidth="1" opacity="0.6" className="sc-sensor-ring" style={{ animationDelay: `${s.delay}s` }} />
              {/* Node circle */}
              <circle cx="0" cy="0" r="11" fill="rgba(13,26,46,0.9)" stroke={s.color} strokeWidth="1.2" className="sc-sensor-pulse" style={{ animationDelay: `${s.delay}s` }} />
              {/* Icon */}
              <g transform="translate(-7, -7)">
                <s.icon size={14} className="text-bioluminescent" />
              </g>
              {/* Label */}
              <text x="0" y="26" textAnchor="middle" fill={s.color} fontSize="5.5" fontWeight="600" letterSpacing="0.8" opacity="0.7">
                {s.label}
              </text>
            </g>
          ))}

          {/* ===== HUD Overlay — Top Status Bar ===== */}
          <g transform="translate(600, 30)">
            <rect x="-240" y="-15" width="480" height="30" rx="15" fill="rgba(13,26,46,0.85)" stroke="rgba(79,127,245,0.25)" strokeWidth="1" />
            <circle cx="-220" cy="0" r="3.5" fill="#4f7ff5" className="sc-sensor-pulse" />
            <text x="-208" y="3.5" fill="#b9d0ff" fontSize="8" fontWeight="500" letterSpacing="1" opacity="0.85">
              SMART CITY · LIVE TRAFFIC & AI MONITORING
            </text>
            <g transform="translate(200, 0)">
              <Satellite size={11} x={-5.5} y={-5.5} className="text-liquid-mist" />
            </g>
            <g transform="translate(222, 0)">
              <Monitor size={11} x={-5.5} y={-5.5} className="text-liquid-mist" />
            </g>
          </g>

          {/* ===== HUD Overlay — Bottom Tech Bar ===== */}
          <g transform="translate(0, 400)">
            <rect x="0" y="-2" width="1200" height="2" fill="rgba(79,127,245,0.15)" />
          </g>
        </svg>

        {/* ===== Bottom Info Strip ===== */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 lg:px-10 py-5 border-t border-white/5 bg-liquid-abyss/40">
          <div className="flex items-center gap-2">
            <Camera size={14} className="text-bioluminescent" />
            <span className="text-[11px] uppercase tracking-[0.15em] text-silver-mist">{t('sc.eyebrow')}</span>
          </div>
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="flex items-center gap-2">
              <TrafficCone size={13} className="text-bioluminescent" />
              <span className="text-[10px] uppercase tracking-[0.1em] text-slate-deep">AI Traffic</span>
            </div>
            <div className="w-px h-5 bg-white/10" />
            <div className="flex items-center gap-2">
              <Cpu size={13} className="text-bioluminescent" />
              <span className="text-[10px] uppercase tracking-[0.1em] text-slate-deep">AI Hub</span>
            </div>
            <div className="w-px h-5 bg-white/10" />
            <div className="flex items-center gap-2">
              <Wifi size={13} className="text-bioluminescent" />
              <span className="text-[10px] uppercase tracking-[0.1em] text-slate-deep">IoT Mesh</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
