import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AvatarPart } from "./AvatarPart";

type Props = {
  title: string;
  part: string;
  src: string;
  qty: number;
  isOpen: boolean;
  activePart?: string;
  onClose: () => void;
  onPartSelected: (part: string, src: string) => void;
};

export const AvatarPartModal = ({
  title,
  part,
  src,
  qty,
  isOpen,
  activePart,
  onPartSelected,
  onClose,
}: Props) => {
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
                <div className="flex items-center space-x-2 overflow-x-auto max-w-2xl px-2">
                  {[...Array(qty)].map((_, index) => {
                    const path = `${src}${(index + 1).toString().padStart(2, "0")}`;
                    const isSelected = activePart === path;
                    return (
                      <button
                        key={path}
                        onClick={() => {
                          onPartSelected(part, path);
                          onClose();
                        }}
                        className={`flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all duration-200 hover:scale-105 ${
                          isSelected ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                        }`}
                      >
                        <div className="w-8 h-8">
                          <AvatarPart path={path} />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
