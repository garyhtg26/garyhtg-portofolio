'use client';

import React, { useEffect, useState, useRef } from 'react';

const SPRITES = {
  running: {
    url: '/sprites/lilwiz/running.png',
    frames: 6,
  },
  idle: {
    url: '/sprites/lilwiz/idle.png',
    frames: 5,
  },
};

const FRAME_WIDTH = 32;
const FRAME_HEIGHT = 32;
const MAX_OFFSET = -300; // arah negatif: dari 0 ke -300

export default function LilwizCharacter() {
  const [frameIndex, setFrameIndex] = useState(0);
  const [offsetX, setOffsetX] = useState(0); // translateX dalam arah kiri
  const [direction, setDirection] = useState(-1); // mulai ke kiri
  const [isRunning, setIsRunning] = useState(true);
  const idlePending = useRef(false);

  const currentSprite = isRunning ? SPRITES.running : SPRITES.idle;

  // Animate sprite frame
  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % currentSprite.frames);
    }, isRunning ? 100 : 130);
    return () => clearInterval(interval);
  }, [isRunning, currentSprite.frames]);

  // Animate movement
  useEffect(() => {
    const moveInterval = setInterval(() => {
      if (!isRunning) return;

      setOffsetX((prev) => {
        const next = prev + 2 * direction;

        const atLeftEdge = direction === -1 && next <= MAX_OFFSET;
        const atRightEdge = direction === 1 && next >= 0;

        if ((atLeftEdge || atRightEdge) && !idlePending.current) {
          setIsRunning(false);
          idlePending.current = true;
          setTimeout(() => {
            setDirection((d) => d * -1); // balik arah
            setIsRunning(true);
            idlePending.current = false;
          }, 1000);
          return prev;
        }

        return next;
      });
    }, 30);

    return () => clearInterval(moveInterval);
  }, [direction, isRunning]);

  return (
    <div className="mt-10 h-[64px] w-full overflow-hidden">
      <div
        className="absolute right-0 bottom-0 w-[32px] h-[32px] bg-no-repeat [image-rendering:pixelated]"
        style={{
          backgroundImage: `url(${currentSprite.url})`,
          backgroundSize: `${FRAME_WIDTH * currentSprite.frames}px ${FRAME_HEIGHT}px`,
          backgroundPosition: `-${frameIndex * FRAME_WIDTH}px 0px`,
          transform: `translateX(${offsetX}px) scaleX(${direction})`,
        }}
      />
    </div>
  );
}
