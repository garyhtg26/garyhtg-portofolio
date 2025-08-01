'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import HollyCharacter from "@/components/HollyCharacter";
import LilwizCharacter from '@/components/LilwizCharacter';

export default function Hero() {
  const textWrapperRef = useRef(null);
  const [maskPos, setMaskPos] = useState({ x: -9999, y: -9999 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      const rect = textWrapperRef.current.getBoundingClientRect();
      setMaskPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const wrapper = textWrapperRef.current;
    wrapper.addEventListener("mousemove", handleMove);
    wrapper.addEventListener("mouseenter", () => setHovering(true));
    wrapper.addEventListener("mouseleave", () => {
      setHovering(false);
      setMaskPos({ x: -9999, y: -9999 }); // sembunyikan mask & lingkaran
    });

    return () => {
      wrapper.removeEventListener("mousemove", handleMove);
      wrapper.removeEventListener("mouseenter", () => setHovering(true));
      wrapper.removeEventListener("mouseleave", () => setHovering(false));
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden flex flex-col items-center justify-center text-center px-4">
      {/* Wrapper */}
      <div ref={textWrapperRef} className="relative inline-block cursor-none">
        {/* Main Text */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 text-white relative z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello, I'm Gary Hutagalung
        </motion.h1>

        {/* Masked Glowing Text */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            WebkitMaskImage: `radial-gradient(80px at ${maskPos.x}px ${maskPos.y}px, white 0%, transparent 100%)`,
            maskImage: `radial-gradient(80px at ${maskPos.x}px ${maskPos.y}px, white 0%, transparent 100%)`,
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            color: '#0ff',
            textShadow: '0 0 3px #0ff, 0 0 6px #0ff',
          }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hello, I'm Gary Hutagalung
          </h1>
        </div>
      </div>

      {/* Subtitle */}
      <motion.p
        className="text-lg md:text-xl max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        A passionate frontend developer who loves crafting engaging web experiences with animation and 3D.
      </motion.p>

      {/* Characters */}
      <div className="w-full relative mt-12 h-[64px]">
        <HollyCharacter />
        <LilwizCharacter />
      </div>
    </section>
  );
}
