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

const Astro = ({ position }) => {
  return (
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
  );
};

const Hero = () => {
  const [nodes, setNodes] = useState([]);
  const [astroPosition, setAstroPosition] = useState({ x: 0, y: 0 });

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

  const handleMouseMove = (event) => {
    setAstroPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const findClosestNodes = () => {
    const lineRadius = 80; // Set the line connecting radius here
    const sortedNodes = nodes.map((node) => ({
      ...node,
      distance: Math.sqrt((astroPosition.x - node.position.x) ** 2 + (astroPosition.y - node.position.y) ** 2),
    }));
    sortedNodes.sort((a, b) => a.distance - b.distance);

    return sortedNodes.filter((node) => node.distance <= lineRadius);
  };

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
      <Astro position={astroPosition} />

      {/* Lines */}
      <svg
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none' }}
        width="100%"
        height="100%"
      >
        {/* Updated line path calculations */}
        {findClosestNodes().map((node, index) => {
          const dx = node.position.x - astroPosition.x;
          const dy = node.position.y - astroPosition.y;
          const cx1 = (astroPosition.x + node.position.x) / 2;
          const cy1 = (astroPosition.y + node.position.y) / 2;
          const cx2 = (astroPosition.x + node.position.x) / 2;
          const cy2 = (astroPosition.y + node.position.y) / 2;

          // Create a curved path string using cubic Bezier curve
          const curvePath = `M${astroPosition.x},${astroPosition.y} C${cx1},${cy1} ${cx2},${cy2} ${node.position.x},${node.position.y}`;

          return (
            <path
              key={index}
              d={curvePath}
              stroke="rgba(66, 215, 245, 0.5)"
              fill="transparent"
              // style={{ strokeWidth: 0.5, transition: 'stroke 0.3s ease' }} // Set the strokeWidth and ease effect
            />
          );
        })}
      </svg>
    </div>
  );
};

export default Hero;
