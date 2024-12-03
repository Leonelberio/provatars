import { useState, useCallback, useEffect } from 'react';

const STORAGE_KEY = 'provatars-color-history';

export const useColorHistory = (maxColors: number = 5) => {
  const [colors, setColors] = useState<string[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(colors));
  }, [colors]);

  const addColor = useCallback((color: string) => {
    setColors(prevColors => {
      const newColors = prevColors.filter(c => c !== color);
      return [color, ...newColors].slice(0, maxColors);
    });
  }, [maxColors]);

  const clearHistory = useCallback(() => {
    setColors([]);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    colors,
    addColor,
    clearHistory
  };
}; 