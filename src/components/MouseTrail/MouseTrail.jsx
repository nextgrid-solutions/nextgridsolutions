"use client";

import { useEffect, useRef } from "react";

export default function MouseTrail() {
  const canvasRef = useRef(null);
  const trail = useRef([]);
  const maxTrail = 25;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: width / 2, y: height / 2 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    let frame = 0;

    const animate = () => {
      frame++;

      // Clear canvas with low alpha to create fading trail
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
      ctx.fillRect(0, 0, width, height);

      // Update trail
      trail.current.unshift({ x: mouse.x, y: mouse.y, frame });
      if (trail.current.length > maxTrail) {
        trail.current.pop();
      }

      // Begin drawing swirling path
      ctx.beginPath();
      for (let i = 0; i < trail.current.length; i++) {
        const point = trail.current[i];
        const swirlRadius = (maxTrail - i) * 0.4; // Swirl offset
        const angle = frame * 0.1 + i * 0.3;

        const swirlX = point.x + Math.cos(angle) * swirlRadius;
        const swirlY = point.y + Math.sin(angle) * swirlRadius;

        if (i === 0) {
          ctx.moveTo(swirlX, swirlY);
        } else {
          ctx.lineTo(swirlX, swirlY);
        }
      }

      ctx.strokeStyle = "rgba(0, 0, 0, 0.7)";
      ctx.lineWidth = 2;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.stroke();

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed top-0 left-0 z-50"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
