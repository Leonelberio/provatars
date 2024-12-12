import React, { Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { ColorSelectionBar } from './ColorSelectionBar';

// Palette de couleurs de peau naturelles
const SKIN_TONES = [
  { value: '#FFF6E9', bgClass: 'bg-[#FFF6E9]', name: 'Très clair' },
  { value: '#FFE5C4', bgClass: 'bg-[#FFE5C4]', name: 'Clair' },
  { value: '#FFD5AA', bgClass: 'bg-[#FFD5AA]', name: 'Moyen clair' },
  { value: '#EDB98A', bgClass: 'bg-[#EDB98A]', name: 'Moyen' },
  { value: '#D08B5B', bgClass: 'bg-[#D08B5B]', name: 'Moyen foncé' },
  { value: '#AE5D29', bgClass: 'bg-[#AE5D29]', name: 'Foncé' },
  { value: '#694D3D', bgClass: 'bg-[#694D3D]', name: 'Très foncé' }
];

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSkinToneSelected: (skinTone: string) => void;
  activeSkinTone?: string;
};

export const AvatarSkinToneModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onSkinToneSelected,
  activeSkinTone
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                <Dialog.Title className="text-lg font-medium text-gray-900 mb-4">
                  Choisissez une teinte de peau
                </Dialog.Title>

                <div className="mt-4">
                  <ColorSelectionBar 
                    onColorSelect={onSkinToneSelected} 
                    selectedColor={activeSkinTone}
                    presetColors={SKIN_TONES}
                    showCustomColorPicker={false}
                  />
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={onClose}
                  >
                    Fermer
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}; 