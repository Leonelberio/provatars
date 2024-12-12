import { useState, useCallback } from 'react';
import { useLocalStorage } from 'usehooks-ts';

const SKIN_TONES = [
  { value: '#FFF6E9', bgClass: 'bg-[#FFF6E9]', name: 'Très clair' },
  { value: '#FFE5C4', bgClass: 'bg-[#FFE5C4]', name: 'Clair' },
  { value: '#FFD5AA', bgClass: 'bg-[#FFD5AA]', name: 'Moyen clair' },
  { value: '#EDB98A', bgClass: 'bg-[#EDB98A]', name: 'Moyen' },
  { value: '#D08B5B', bgClass: 'bg-[#D08B5B]', name: 'Moyen foncé' },
  { value: '#AE5D29', bgClass: 'bg-[#AE5D29]', name: 'Foncé' },
  { value: '#694D3D', bgClass: 'bg-[#694D3D]', name: 'Très foncé' }
];

const DEFAULT_SKIN_TONE = SKIN_TONES[1].bgClass;

export const useAvatarSkinTone = () => {
  const [skinTone, setSkinTone] = useLocalStorage('avatarSkinTone', DEFAULT_SKIN_TONE);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const changeSkinTone = useCallback((newTone: string) => {
    setSkinTone(newTone);
    closeModal();
  }, [setSkinTone, closeModal]);

  return {
    skinTone,
    isModalOpen,
    openModal,
    closeModal,
    changeSkinTone,
    availableSkinTones: SKIN_TONES
  };
}; 