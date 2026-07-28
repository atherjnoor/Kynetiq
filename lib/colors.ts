// Design tokens ported from the original Kynetiq mockup.
// All colors use oklch() strings, which modern browsers parse natively
// when passed straight through as CSS values (no conversion needed).

export const INK = 'oklch(20% 0.02 250)';
export const MUTED = 'oklch(50% 0.015 250)';
export const MUTED2 = 'oklch(45% 0.02 250)';
export const BORDER = 'oklch(92% 0.01 240)';
export const BORDER_SOFT = 'oklch(94% 0.01 240)';
export const BG = 'oklch(98.5% 0.006 240)';
export const BG_PAGE = 'oklch(98% 0.008 240)';
export const SIDEBAR = 'oklch(15% 0.02 255)';
export const SIDEBAR_CARD = 'oklch(22% 0.02 255)';
export const SIDEBAR_TEXT = 'oklch(75% 0.02 250)';
export const TRACK = 'oklch(93% 0.01 240)';
export const GREEN = 'oklch(65% 0.14 155)';
export const GREEN_SOFT = 'oklch(94% 0.05 155)';
export const GREEN_TEXT = 'oklch(38% 0.1 155)';
export const ORANGE = 'oklch(72% 0.15 55)';
export const ORANGE_SOFT = 'oklch(94% 0.05 55)';
export const ORANGE_TEXT = 'oklch(42% 0.13 55)';
export const TEAL = 'oklch(70% 0.13 190)';

export const THEMES = [
  { name: 'Blue', value: '#3B6FE0' },
  { name: 'Green', value: '#2FAE6B' },
  { name: 'Orange', value: '#E2793A' },
];

export const display = { fontFamily: "'Sora', sans-serif" };
export const body = { fontFamily: "'Work Sans', sans-serif" };
