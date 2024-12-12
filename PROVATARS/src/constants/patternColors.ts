export const PATTERN_COLORS = [
  '#2C3E50',  // Bleu foncé
  '#E74C3C',  // Rouge vif
  '#27AE60',  // Vert
  '#F1C40F',  // Jaune
  '#8E44AD',  // Violet
  '#E67E22',  // Orange
];

export const getNextPatternColor = (currentColor: string): string => {
  const currentIndex = PATTERN_COLORS.indexOf(currentColor);
  return PATTERN_COLORS[(currentIndex + 1) % PATTERN_COLORS.length];
}; 