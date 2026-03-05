import React, { useState, useEffect, useMemo } from "react";

const NODE_COUNT = 120;
const LINE_RADIUS = 70;
const LERP = 0.06;

const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

const Node = ({ position, bounds }) => {
  const x = bounds ? clamp(position.x, 0, bounds.w) : position.x;
  const y = bounds ? clamp(position.y, 0, bounds.h) : position.y;
  return (
    <div
      className="absolute w-[2px] h-[2px] rounded-full bg-accent/40"
      style={{ left: x, top: y }}
    />
  );
};

const Astro = ({ position, nodes, bounds }) => {
  const safePos = useMemo(() => {
    if (!bounds) return position;
    return {
      x: clamp(position.x, 0, bounds.w),
      y: clamp(position.y, 0, bounds.h),
    };
  }, [position, bounds]);

  const nearby = useMemo(() => {
    return nodes.filter((node) => {
      const dx = node.x - safePos.x;
      const dy = node.y - safePos.y;
      return dx * dx + dy * dy <= LINE_RADIUS * LINE_RADIUS;
    });
  }, [safePos, nodes]);

  return (
    <>
      <div
        className="absolute w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_20px_rgba(0,212,170,0.5)]"
        style={{
          left: safePos.x,
          top: safePos.y,
          transform: "translate(-50%,-50%)",
        }}
      />
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
        style={{ zIndex: 0 }}
        preserveAspectRatio="xMidYMid slice"
      >
        {nearby.map((node, i) => (
          <line
            key={i}
            x1={safePos.x}
            y1={safePos.y}
            x2={clamp(node.x, 0, bounds?.w ?? node.x)}
            y2={clamp(node.y, 0, bounds?.h ?? node.y)}
            stroke="rgba(0, 212, 170, 0.2)"
            strokeWidth="1"
          />
        ))}
      </svg>
    </>
  );
};

const Hero = () => {
  const [nodes, setNodes] = useState([]);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [astro, setAstro] = useState({ x: 0, y: 0 });
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    setBounds({ w, h });
    setNodes(
      Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
      }))
    );
  }, []);

  useEffect(() => {
    const onResize = () =>
      setBounds({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onMove = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    let raf;
    const update = () => {
      setAstro((prev) => ({
        x: prev.x + (cursor.x - prev.x) * LERP,
        y: prev.y + (cursor.y - prev.y) * LERP,
      }));
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [cursor]);

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden w-full h-full"
      style={{ left: 0, right: 0, top: 0, bottom: 0 }}
      aria-hidden
    >
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg opacity-60" />
      <div className="absolute inset-0 overflow-hidden">
        {nodes.map((node, i) => (
          <Node key={i} position={node} bounds={bounds} />
        ))}
      </div>
      <Astro position={astro} nodes={nodes} bounds={bounds} />
    </div>
  );
};

export default Hero;
