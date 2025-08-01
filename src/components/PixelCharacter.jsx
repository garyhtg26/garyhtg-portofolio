'use client';
import React, { useEffect, useRef } from 'react';

export default function PixelCharacter() {
  const characterRef = useRef(null);

  useEffect(() => {
    let x = 0;
    let direction = 1;
    let frame = 0;

    const frameSize = 32;       // ukuran asli 1 frame
    const scale = 3;            // perbesar 3x
    const displaySize = frameSize * scale; // 96px
    const totalFrames = 4;
    const speed = 1;

    const interval = setInterval(() => {
      if (!characterRef.current) return;

      frame = (frame + 1) % totalFrames;
      x += direction * speed;

      if (x > window.innerWidth - displaySize || x < 0) direction *= -1;

      characterRef.current.style.transform = `translateX(${x}px) scaleX(${direction})`;
      characterRef.current.style.backgroundPosition = `-${frame * displaySize}px 0px`;
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={characterRef}
      className="absolute bottom-6 left-0"
      style={{
        width: '96px', // 3x dari 32
        height: '96px',
        backgroundImage: "url('/sprites/walk-cycle.png')",
        backgroundSize: '384px 96px', // (128*3) x (32*3)
        backgroundRepeat: 'no-repeat',
        imageRendering: 'pixelated',
        transformOrigin: 'bottom left',
      }}
    />
  );
}
