export const BACKGROUND_COLORS = [
  '#FF6B6B',  // Rouge
  '#4ECDC4',  // Turquoise
  '#45B7D1',  // Bleu clair
  '#96CEB4',  // Vert menthe
  '#FFEEAD',  // Jaune pâle
  '#D4A5A5',  // Rose poudré
];

export const getNextBackgroundColor = (currentColor: string): string => {
  const currentIndex = BACKGROUND_COLORS.indexOf(currentColor);
  return BACKGROUND_COLORS[(currentIndex + 1) % BACKGROUND_COLORS.length];
}; 