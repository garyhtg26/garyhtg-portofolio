'use client';

import React, { useEffect, useRef } from 'react';

const rand = (min, max) => min + Math.random() * (max - min);

/**
 * A self-animating pixel character.
 *
 * It patrols left<->right (the `walk` animation) and, every few seconds, pauses
 * to play one of its extra animations (`idle` or `action`) before resuming.
 *
 * Everything — movement, frame stepping and animation swaps — is driven from a
 * single requestAnimationFrame loop and written straight to the DOM, so it stays
 * smooth and never re-renders React. The character is anchored by its
 * bottom-center, so swapping to an animation with a different frame size (e.g.
 * a wide sword swing) keeps the feet planted and the body centered.
 *
 * @param {object} character  Entry from the CHARACTERS registry.
 */
export default function SpriteCharacter({ character, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { facing = 'right', scale = 2, speed = 64, anims, lift = 0, hover = 0, groundPad = 0 } = character;
    const facingSign = facing === 'left' ? -1 : 1;
    const hasIdle = !!anims.idle;
    const hasAction = !!anims.action;

    const trackW = () => el.parentElement?.clientWidth ?? 0;

    // --- mutable state (kept out of React to avoid re-renders) ---
    let mode = 'walk';
    let cur = anims.walk;
    let dispW = cur.frameW * scale;
    let dispH = cur.frameH * scale;
    let dir = Math.random() < 0.5 ? 1 : -1;
    let frame = 0;
    let frameAcc = 0;
    let modeTimeLeft = rand(2.5, 5);
    let centerX = 0;
    let placed = false;
    let elapsed = 0; // seconds since mount, for the flying bob
    let last = performance.now();
    let raf = 0;

    const setAnim = (name) => {
      mode = name;
      cur = anims[name];
      dispW = cur.frameW * scale;
      dispH = cur.frameH * scale;
      frame = 0;
      frameAcc = 0;
      el.style.width = `${dispW}px`;
      el.style.height = `${dispH}px`;
      el.style.backgroundImage = `url("${encodeURI(cur.url)}")`;
      // height covers the whole sheet so a row offset can pick the right row
      el.style.backgroundSize = `${dispW * cur.frames}px ${dispH * (cur.sheetRows || 1)}px`;
    };

    const pickPause = () => {
      if (hasIdle && hasAction) return Math.random() < 0.5 ? 'idle' : 'action';
      if (hasAction) return 'action';
      if (hasIdle) return 'idle';
      return 'walk';
    };

    setAnim('walk');

    // Place immediately (parent width is known once mounted) so the characters
    // don't flash at the origin for a frame before the first rAF tick.
    const drawAt = () => {
      // Directional sheets (rowRight/rowLeft) swap rows by heading instead of
      // mirroring; otherwise use a fixed row and flip with scaleX.
      const directional = cur.rowRight != null;
      const row = directional ? (dir > 0 ? cur.rowRight : cur.rowLeft) : (cur.row || 0);
      const face = directional ? 1 : facingSign * dir;
      const y = lift + (hover ? Math.sin(elapsed * 2.2) * hover : 0); // float up, gentle bob
      el.style.transform = `translate3d(${centerX - dispW / 2}px, ${-y}px, 0) scaleX(${face})`;
      el.style.backgroundPosition = `-${frame * dispW}px -${row * dispH}px`;
    };
    {
      const W0 = trackW();
      if (W0 > 0) {
        centerX = rand(dispW / 2, Math.max(dispW / 2, W0 - dispW / 2));
        placed = true;
        drawAt();
      }
    }

    const loop = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05); // clamp tab-switch jumps
      last = now;
      elapsed += dt;

      const W = trackW();
      const half = dispW / 2;

      // place randomly along the track on the first frame we know its width
      if (!placed && W > 0) {
        centerX = rand(half, Math.max(half, W - half));
        placed = true;
      }

      // step the current animation
      const frameDur = 1 / cur.fps;
      frameAcc += dt;
      while (frameAcc >= frameDur) {
        frameAcc -= frameDur;
        frame = (frame + 1) % cur.frames;
      }

      if (mode === 'walk') {
        centerX += dir * speed * dt;
        if (centerX >= W - half) { centerX = W - half; dir = -1; }
        else if (centerX <= half) { centerX = half; dir = 1; }

        modeTimeLeft -= dt;
        if (modeTimeLeft <= 0 && (hasIdle || hasAction)) {
          const next = pickPause();
          setAnim(next);
          modeTimeLeft = next === 'idle' ? rand(1.6, 3) : rand(0.9, 1.5);
        }
      } else {
        // idle / action: stand still, then return to walking
        modeTimeLeft -= dt;
        if (modeTimeLeft <= 0) {
          setAnim('walk');
          modeTimeLeft = rand(2.5, 5);
        }
      }

      drawAt();
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [character]);

  return (
    <div
      ref={ref}
      className={`absolute bottom-0 left-0 bg-no-repeat [image-rendering:pixelated] ${className}`}
      style={{ transformOrigin: 'bottom center', willChange: 'transform' }}
    />
  );
}
