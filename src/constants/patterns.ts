export type Pattern = {
  name: string;
  value: string;
  preview: string;
};

export const PATTERNS = [
  'M10 10h100v100h-100z',  // Carré simple
  'M30 30h60v60h-60z',     // Petit carré
  'M10 10L110 110M110 10L10 110',  // X
  'M60 10A50 50 0 1 1 60 110A50 50 0 1 1 60 10',  // Cercle
];

export const getNextPattern = (currentPattern: string): string => {
  const currentIndex = PATTERNS.indexOf(currentPattern);
  return PATTERNS[(currentIndex + 1) % PATTERNS.length];
}; 