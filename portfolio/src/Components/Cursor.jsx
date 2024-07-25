import React from 'react'
import { useState,useEffect } from 'react';

const Cursor = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const scrollTop = document.documentElement.scrollTop;
      const scrollLeft = document.documentElement.scrollLeft;
      setPosition({ x: clientX + scrollLeft, y: clientY + scrollTop });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);



  return (
    <div
        className="pointer-events-none inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background: `radial-gradient(400px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      ></div>
  )
}

export default Cursor
