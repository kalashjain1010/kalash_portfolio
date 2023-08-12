import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
