import React from 'react';

const Hero = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: '-1',
        overflow: 'hidden',
        backgroundColor: '#333333', // Change the background color
      }}
    >
      {/* Astro */}
      {/* <div
        style={{
          position: 'absolute',
          width: '20px',
          height: '20px',
          backgroundColor: '#85fffb',
          borderRadius: '50%',
          animation: 'astroAnimation 2s infinite',
        }}
        className="astro" // Apply Tailwind classes for the "Astro" object */}
      {/* /> */}

      {/* Nodes */}
      {Array.from({ length: 100 }, (_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: '3px',
            height: '3px',
            backgroundColor: 'rgba(66, 215, 245, 0.5)',
            borderRadius: '50%',
            animation: 'nodeAnimation 3s infinite',
            left: `${Math.random() * 100}%`, // Randomize node position
            top: `${Math.random() * 100}%`,
          }}
          className="node" // Apply Tailwind classes for the "Node" objects
        />
      ))}
    </div>
  );
};

export default Hero;
