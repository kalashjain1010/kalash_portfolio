import React, { useState, useEffect } from 'react';

const Node = ({ position }) => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '3px',
        height: '3px',
        backgroundColor: 'rgba(66, 215, 245, 0.5)',
        borderRadius: '50%',
        left: position.x,
        top: position.y,
      }}
      className="node"
    />
  );
};

const Astro = ({ position, nodes, lineRadius }) => {
  const filteredNodes = nodes.filter((node) => {
    const dx = node.position.x - position.x;
    const dy = node.position.y - position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance <= lineRadius;
  });

  return (
    <div>
      <div
        style={{
          position: 'absolute',
          width: '10px',
          height: '10px',
          backgroundColor: '#85fffb',
          borderRadius: '50%',
          left: position.x,
          top: position.y,
        }}
        className="astro"
      />
      <svg
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none' }}
        width="100%"
        height="100%"
      >
        {filteredNodes.map((node, index) => {
          const dx = node.position.x - position.x;
          const dy = node.position.y - position.y;
          const angle = Math.atan2(dy, dx);
          const startX = position.x + (10 * Math.cos(angle));
          const startY = position.y + (10 * Math.sin(angle));
          const endX = node.position.x;
          const endY = node.position.y;

          return (
            <line
              key={index}
              x1={startX}
              y1={startY}
              x2={endX}
              y2={endY}
              stroke="rgba(66, 215, 245, 0.5)"
              strokeWidth="1"
            />
          );
        })}
      </svg>
    </div>
  );
};

const Hero = () => {
  const [nodes, setNodes] = useState([]);
  const [astroPosition, setAstroPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Creating nodes with random positions for demonstration purposes
    const nodesData = Array.from({ length: 300 }, (_, i) => ({
      position: {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      },
    }));
    setNodes(nodesData);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let animationFrameId;

    const updateAstroPosition = () => {
      setAstroPosition((prevPosition) => {
        const dx = cursorPosition.x - prevPosition.x;
        const dy = cursorPosition.y - prevPosition.y;
        return {
          x: prevPosition.x + dx * 0.05, // Increase the delay by reducing the factor to 0.05
          y: prevPosition.y + dy * 0.05,
        };
      });

      animationFrameId = requestAnimationFrame(updateAstroPosition);
    };

    animationFrameId = requestAnimationFrame(updateAstroPosition);

    return () => cancelAnimationFrame(animationFrameId);
  }, [cursorPosition]);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: '-1', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{ backgroundColor: '#333333', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }} />

      {/* Nodes */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
        {nodes.map((node, index) => (
          <Node key={index} position={node.position} />
        ))}
      </div>

      {/* Astro */}
      <Astro position={astroPosition} nodes={nodes} lineRadius={80} />
    </div>
  );
};

export default Hero;
