'use client';

import React, { useEffect, useState, useRef } from 'react';

const SPRITES = {
  running: {
    url: '/sprites/holly/running.png',
    frames: 6,
  },
  idle: {
    url: '/sprites/holly/idle.png',
    frames: 9,
  },
};

const FRAME_WIDTH = 32;
const FRAME_HEIGHT = 32;

export default function HollyCharacter() {
  const [frameIndex, setFrameIndex] = useState(0);
  const [xPos, setXPos] = useState(0);
  const [direction, setDirection] = useState(1); // 1: kanan, -1: kiri
  const [isRunning, setIsRunning] = useState(true);
  const idlePending = useRef(false); // supaya tidak tumpuk idle berkali-kali

  const currentSprite = isRunning ? SPRITES.running : SPRITES.idle;

  // Animate sprite frames
  useEffect(() => {
    const frameInterval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % currentSprite.frames);
    }, isRunning ? 100 : 130);
    return () => clearInterval(frameInterval);
  }, [isRunning, currentSprite.frames]);

  // Animate movement
  useEffect(() => {
    const moveInterval = setInterval(() => {
      if (!isRunning) return; // kalau lagi idle, jangan gerak

      setXPos((prev) => {
        const next = prev + 2 * direction;
        if ((direction === 1 && next >= 300) || (direction === -1 && next <= 0)) {
          if (!idlePending.current) {
            setIsRunning(false); // idle
            idlePending.current = true;
            setTimeout(() => {
              setDirection((d) => d * -1); // balik arah
              setIsRunning(true); // lanjut jalan
              idlePending.current = false;
            }, 1000); // 1 detik idle
          }
          return prev; // tetap di posisi saat idle
        }
        return next;
      });
    }, 30);

    return () => clearInterval(moveInterval);
  }, [direction, isRunning]);

  return (
    <div className=" mt-10 h-[64px] w-full overflow-hidden">
      <div
        className="absolute bottom-0 w-[32px] h-[32px] bg-no-repeat [image-rendering:pixelated]"
        style={{
          backgroundImage: `url(${currentSprite.url})`,
          backgroundSize: `${FRAME_WIDTH * currentSprite.frames}px ${FRAME_HEIGHT}px`,
          backgroundPosition: `-${frameIndex * FRAME_WIDTH}px 0px`,
          transform: `translateX(${xPos}px) scaleX(${direction})`,
        }}
      />
    </div>
  );
}
