'use client';

import React from 'react';
import { motion } from 'framer-motion';
import HollyCharacter from "@/components/HollyCharacter";
import LilwizCharacter from '@/components/LilwizCharacter';

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden flex flex-col items-center justify-center text-center px-4">

      <motion.h1
      data-text="Hello, I'm Gary Hutagalung"
        className="relative glitch-text text-5xl md:text-7xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hello, I'm Gary Hutagalung
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        A passionate frontend developer who loves crafting engaging web experiences with animation and 3D.
      </motion.p>

      <div className="w-full relative mt-12 h-[64px]">
        <HollyCharacter />
        <LilwizCharacter />
      </div>
    </section>
  );
}
