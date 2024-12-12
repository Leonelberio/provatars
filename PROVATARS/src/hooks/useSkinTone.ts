import { useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

export const DEFAULT_SKIN_TONE = 'bg-[#FFE5C4]';

export const useSkinTone = () => {
  const [skinTone, setSkinTone] = useLocalStorage('avatarSkinTone', DEFAULT_SKIN_TONE);
  const [isSkinToneModalOpen, setIsSkinToneModalOpen] = useState(false);

  const openSkinToneModal = () => {
    setIsSkinToneModalOpen(true);
  };

  const closeSkinToneModal = () => {
    setIsSkinToneModalOpen(false);
  };

  const handleSkinToneChange = (newSkinTone: string) => {
    setSkinTone(newSkinTone);
    closeSkinToneModal();
  };

  return {
    skinTone,
    isSkinToneModalOpen,
    openSkinToneModal,
    closeSkinToneModal,
    handleSkinToneChange,
  };
}; 