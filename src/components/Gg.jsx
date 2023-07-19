import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

import './MyWebsite.css';
// import Navbar from './Navbar'; 
import Content from './Content';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
// import About from './About';

const Gg = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let astro;
    let nodes = [];

    const sketch = (p) => {
      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.parent(canvasRef.current);
        astro = new Astro(p.width / 2, p.height / 2);
        for (let i = 0; i < 300; i++) {
          nodes.push(new Node(p.random(p.width), p.random(p.height)));
        }
      };

      p.draw = () => {
        p.background(51);
        astro.update(p.mouseX, p.mouseY);
        astro.show();
        for (let i = 0; i < nodes.length; i++) {
          nodes[i].update(astro.x, astro.y);
          nodes[i].show();
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };


      class Astro {
        constructor(x, y) {
          this.x = x;
          this.y = y;
          this.color = p.color(133, 255, 251);
          this.r = 10;
          this.hr = 60;
          this.vx = 0;
          this.vy = 0;
        }

        show() {
          p.fill(this.color);
          p.circle(this.x, this.y, this.r);
        }

        update(mouseX, mouseY) {
          this.x += this.vx;
          this.y += this.vy;
          this.vx = (mouseX - this.x) * 0.1;
          this.vy = (mouseY - this.y) * 0.1;
        }
      }

      class Node {
        constructor(x, y) {
          this.x = x;
          this.y = y;
          this.color = null;
          this.length = p.random(20, 100);
          this.cpd = [p.random(50, 200), p.random(50, 200), p.random(50, 200), p.random(50, 200)];
          this.angle = 0;
        }

        show() {
          p.strokeWeight(3);
          p.stroke(this.color);
          p.point(this.x, this.y);
        }

        update(astroX, astroY) {
          let cpx = 1;
          let cpy = 1;
          this.angle++;

          if (this.x < astroX) cpx = -1;
          if (this.y > astroY) cpy = -1;

          if (p.dist(this.x, this.y, astroX, astroY) <= this.length) {
            this.color = p.color(66, 215, 245);
            p.strokeWeight(1);
            p.noFill();
            p.curve(
              this.x + this.cpd[0] * cpx,
              this.y + this.cpd[0] * cpy,
              this.x,
              this.y,
              astroX,
              astroY,
              astroX + this.cpd[0] * cpx,
              astroY + this.cpd[0] * cpy
            );
          } else {
            this.color = p.color(156, 248, 255, 100);
          }
        }
      }
    };

    const myp5 = new p5(sketch);

    // Cleanup function for p5.js
    return () => {
      myp5.remove();
    };
  }, []);

  return (
    <>
    <div className="my-website-container">
      <div className="portfolio-content">
        <About/>
        {/* <Experience/> */}
      </div>
      <div ref={canvasRef} className="canvas-container"></div>
    </div>
        {/* <Experience/> */}
    </>
  );
};

export default Gg;