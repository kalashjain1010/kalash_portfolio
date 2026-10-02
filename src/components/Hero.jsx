import React, { useState, useEffect, useRef } from "react";

const DOT_DENSITY = 0.0005;
const MIN_NODES = 420;
const MAX_NODES = 780;
const LINE_RADIUS = 120;
const MAX_LEGS = 8;
const LERP = 0.06;

const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

function legPath(from, to, node, t, vel) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const dist = Math.hypot(dx, dy) || 1;
  const ux = dx / dist;
  const uy = dy / dist;
  const px = -uy * node.side;
  const py = ux * node.side;

  const walk = Math.sin(t * node.freq + node.phase);
  const walk2 = Math.sin(t * node.freq * 1.15 + node.phase + 1.2);
  const speed = Math.hypot(vel.x, vel.y);
  const trail = Math.min(1, speed * 10);

  const knee = node.amp * dist * (0.5 + 0.5 * walk);
  const ankle = node.amp * dist * (0.28 + 0.45 * walk2);

  const k1x = from.x + ux * dist * 0.32 + px * knee - vel.x * 8 * trail;
  const k1y = from.y + uy * dist * 0.32 + py * knee - vel.y * 8 * trail;
  const k2x = from.x + ux * dist * 0.68 + px * ankle - vel.x * 4 * trail;
  const k2y = from.y + uy * dist * 0.68 + py * ankle - vel.y * 4 * trail;

  return `M ${from.x} ${from.y} C ${k1x} ${k1y} ${k2x} ${k2y} ${to.x} ${to.y}`;
}

const Astro = ({ position, nodes, bounds, t, vel }) => {
  const safePos = !bounds
    ? position
    : {
        x: clamp(position.x, 0, bounds.w),
        y: clamp(position.y, 0, bounds.h),
      };

  const nearby = [];
  for (const node of nodes) {
    const dx = node.x - safePos.x;
    const dy = node.y - safePos.y;
    const dist = Math.hypot(dx, dy);
    if (dist <= LINE_RADIUS && dist > 2) nearby.push({ node, dist });
  }
  nearby.sort((a, b) => a.dist - b.dist);
  if (nearby.length > MAX_LEGS) nearby.length = MAX_LEGS;

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      preserveAspectRatio="xMidYMid slice"
    >
      {nodes.map((node) => (
        <circle
          key={`n-${node.id}`}
          cx={bounds ? clamp(node.x, 0, bounds.w) : node.x}
          cy={bounds ? clamp(node.y, 0, bounds.h) : node.y}
          r={node.r}
          fill={`rgba(0, 212, 170, ${node.o})`}
        />
      ))}
      {nearby.map(({ node, dist }) => {
        const walk = 0.55 + 0.45 * Math.sin(t * node.freq + node.phase);
        return (
          <path
            key={`c-${node.id}`}
            d={legPath(
              safePos,
              {
                x: clamp(node.x, 0, bounds?.w ?? node.x),
                y: clamp(node.y, 0, bounds?.h ?? node.y),
              },
              node,
              t,
              vel,
            )}
            fill="none"
            stroke={`rgba(0, 212, 170, ${0.07 + 0.24 * (1 - dist / LINE_RADIUS) * walk})`}
            strokeWidth={1 + 0.35 * walk}
            strokeLinecap="round"
          />
        );
      })}
      <circle
        cx={safePos.x}
        cy={safePos.y}
        r="5"
        fill="#00d4aa"
        style={{ filter: "drop-shadow(0 0 20px rgba(0,212,170,0.5))" }}
      />
    </svg>
  );
};

const Hero = () => {
  const [nodes, setNodes] = useState([]);
  const [astro, setAstro] = useState({ x: 0, y: 0, vx: 0, vy: 0, t: 0 });
  const [bounds, setBounds] = useState(null);
  const cursorRef = useRef({ x: 0, y: 0 });
  const astroRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const scatter = (w, h) => {
      const count = clamp(Math.round(w * h * DOT_DENSITY), MIN_NODES, MAX_NODES);
      setBounds({ w, h });
      setNodes(
        Array.from({ length: count }, (_, id) => ({
          id,
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() < 0.2 ? 1.7 : 1.15,
          o: 0.28 + Math.random() * 0.38,
          phase: Math.random() * Math.PI * 2,
          freq: 1.4 + Math.random() * 2.6,
          side: Math.random() < 0.5 ? -1 : 1,
          amp: 0.2 + Math.random() * 0.34,
        })),
      );
    };

    scatter(window.innerWidth, window.innerHeight);
    const onResize = () => scatter(window.innerWidth, window.innerHeight);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    let raf;
    const update = () => {
      const cursor = cursorRef.current;
      const prev = astroRef.current;
      const x = prev.x + (cursor.x - prev.x) * LERP;
      const y = prev.y + (cursor.y - prev.y) * LERP;
      const vx = x - prev.x;
      const vy = y - prev.y;
      astroRef.current = { x, y };
      setAstro({ x, y, vx, vy, t: performance.now() / 1000 });
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden w-full h-full"
      style={{ left: 0, right: 0, top: 0, bottom: 0 }}
      aria-hidden
    >
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg opacity-60" />
      <Astro
        position={astro}
        nodes={nodes}
        bounds={bounds}
        t={astro.t}
        vel={{ x: astro.vx, y: astro.vy }}
      />
    </div>
  );
};

export default Hero;
