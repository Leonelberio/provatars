import { useState } from 'react';
import { Avatar } from '../types/avatar';
import { BACKGROUND_COLORS, getNextBackgroundColor } from '../constants/backgroundColors';
import { PATTERNS, getNextPattern } from '../constants/patterns';
import { PATTERN_COLORS, getNextPatternColor } from '../constants/patternColors';
import { SKIN_COLORS, getNextSkinColor, DEFAULT_SKIN_COLOR } from '../constants/skinColors';

export const useAvatar = () => {
  const [avatar, setAvatar] = useState<Avatar>({
    backgroundColor: BACKGROUND_COLORS[0],
    pattern: PATTERNS[0],
    patternColor: PATTERN_COLORS[0],
    skinColor: DEFAULT_SKIN_COLOR,
  });

  const changeBackgroundColor = () => {
    setAvatar((prev) => ({
      ...prev,
      backgroundColor: getNextBackgroundColor(prev.backgroundColor),
    }));
  };

  const changePattern = () => {
    setAvatar((prev) => ({
      ...prev,
      pattern: getNextPattern(prev.pattern),
    }));
  };

  const changePatternColor = () => {
    setAvatar((prev) => ({
      ...prev,
      patternColor: getNextPatternColor(prev.patternColor),
    }));
  };

  const changeSkinColor = () => {
    setAvatar((prev) => ({
      ...prev,
      skinColor: getNextSkinColor(prev.skinColor),
    }));
  };

  return {
    avatar,
    changeBackgroundColor,
    changePattern,
    changePatternColor,
    changeSkinColor,
  };
}; 