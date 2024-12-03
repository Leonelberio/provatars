import React, { Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import { ColorSelectionBar } from './ColorSelectionBar';
import { PatternPicker } from './PatternPicker';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onBackgroundSelected: (background: string) => void;
  activeBackground?: string;
};

export const AvatarBackgroundModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onBackgroundSelected,
  activeBackground
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={onClose}
      >
        <div className="fixed inset-0" onClick={onClose} />

        <div className="fixed inset-0 overflow-y-auto pointer-events-none">
          <div className="flex items-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-4"
            >
              <Dialog.Panel className="transform overflow-hidden rounded-full bg-gray-100 p-2 shadow-lg pointer-events-auto absolute top-[400px]">
                <div className="flex items-center space-x-2">
                  <ColorSelectionBar 
                    onColorSelect={onBackgroundSelected} 
                    selectedColor={activeBackground}
                  />
                  <div className="h-6 w-px bg-gray-300" />
                  <PatternPicker 
                    onSelect={onBackgroundSelected}
                    selectedPattern={activeBackground}
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
