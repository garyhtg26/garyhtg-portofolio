// Central sprite registry.
//
// Each character has a set of animations. `walk` is required (it's the default
// roaming state); `idle` and `action` are optional extras the character plays
// occasionally while patrolling.
//
// Per animation:
//   url     : path under /public (spaces/parens are fine, encoded at runtime)
//   frameW  : width of ONE frame in px
//   frameH  : height of ONE frame in px
//   frames  : number of frames in the row (left -> right)
//   fps     : playback speed of that animation
//
// Per character:
//   facing  : direction the artwork points by default ('right' | 'left')
//   scale   : integer pixel scale of the artwork (keep integer for crisp pixels)
//   speed   : walk speed in px per second
export const CHARACTERS = {
  holly: {
    facing: 'right',
    scale: 2,
    speed: 64,
    anims: {
      walk:   { url: '/sprites/holly/running.png',                frameW: 32, frameH: 32, frames: 6, fps: 10 },
      idle:   { url: '/sprites/holly/idle.png',                   frameW: 32, frameH: 32, frames: 9, fps: 8 },
      action: { url: '/sprites/holly/Ground_smash (64 x 48).png', frameW: 64, frameH: 48, frames: 8, fps: 14 },
    },
  },

  lilwiz: {
    facing: 'right',
    scale: 2,
    speed: 58,
    anims: {
      walk:   { url: '/sprites/lilwiz/running.png',                  frameW: 32, frameH: 32, frames: 6, fps: 10 },
      idle:   { url: '/sprites/lilwiz/idle.png',                     frameW: 32, frameH: 32, frames: 5, fps: 7 },
      action: { url: '/sprites/lilwiz/Casting_Spell_(32 x 32).png',  frameW: 32, frameH: 32, frames: 4, fps: 9 },
    },
  },

  diego: {
    facing: 'right',
    scale: 2,
    speed: 72,
    anims: {
      walk:   { url: '/sprites/diego/Running (32 x 48).png',                 frameW: 32, frameH: 48, frames: 6, fps: 10 },
      idle:   { url: '/sprites/diego/Idle (32 x 48).png',                    frameW: 32, frameH: 48, frames: 4, fps: 6 },
      action: { url: '/sprites/diego/Shooting_while_standing (48 x 48).png', frameW: 48, frameH: 48, frames: 3, fps: 12 },
    },
  },

  gordon: {
    facing: 'right',
    scale: 2,
    speed: 60,
    anims: {
      walk:   { url: '/sprites/gordon/Running (48 x 48).png',  frameW: 48, frameH: 48, frames: 6, fps: 10 },
      idle:   { url: '/sprites/gordon/Idle (48 x 48).png',     frameW: 48, frameH: 48, frames: 4, fps: 6 },
      action: { url: '/sprites/gordon/Up_swing (80 x 64).png', frameW: 80, frameH: 64, frames: 7, fps: 14 },
    },
  },

  grizzly: {
    facing: 'left', // artwork points left by default
    scale: 2.5,
    speed: 46,
    anims: {
      walk:   { url: '/sprites/grizzly/Walking_(48 x 32).png', frameW: 48, frameH: 32, frames: 6, fps: 9 },
      idle:   { url: '/sprites/grizzly/Sleeping_&_Wakeup_(48 x 32).png', frameW: 48, frameH: 32, frames: 3, fps: 4 },
      action: { url: '/sprites/grizzly/Attack_(48 x 32).png',  frameW: 48, frameH: 32, frames: 5, fps: 11 },
    },
  },

  // A 4x4 sheet (64px cells). Uses the two middle side-view rows directionally:
  // row 2 faces right, row 1 faces left — picked by heading (no mirroring).
  charizard: {
    facing: 'right',
    scale: 1.1,
    speed: 44,
    lift: -8, // negative = push DOWN: the sprite cell has empty pixels below
              // its feet, so we nudge it down to sit on the baseline.
    anims: {
      walk: { url: '/sprites/charizard/charizard.png', frameW: 64, frameH: 64, frames: 4, fps: 7, rowRight: 2, rowLeft: 1, sheetRows: 4 },
    },
  },

  // High-res sheet (128px square cells), already transparent, faces right.
  schoolgirl: {
    facing: 'right',
    scale: 1.25,
    speed: 55,
    anims: {
      walk: { url: '/sprites/schoolgirl/Walk.png', frameW: 128, frameH: 128, frames: 12, fps: 12 },
      idle: { url: '/sprites/schoolgirl/Idle.png', frameW: 128, frameH: 128, frames: 9,  fps: 8 },
    },
  },
};
