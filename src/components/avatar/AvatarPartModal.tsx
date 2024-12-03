import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { AvatarButtonPickerContainer } from "./AvatarButtonPickerContainer";
import { AvatarPartPagination } from "./AvatarPartPagination";
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(qty / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const itemsToDisplay = [...Array(itemsPerPage)].map((_, i) => startIndex + i);
  const isPaginationVisible = totalPages > 1;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => {
          onClose();
          // reset page
          setCurrentPage(1);
        }}
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
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto overflow-x-hidden">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-3xl bg-white p-8 text-center align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
                >
                  {title}
                </Dialog.Title>

                <div className="space-y-3">
                  <p className="text-sm text-gray-600">
                    Sélectionnez un style pour personnaliser votre avatar
                  </p>
                  <p className="text-sm text-gray-400">
                    {qty} variations disponibles
                  </p>
                </div>

                <div className="grid grid-cols-4 md:grid-cols-6 gap-4 py-8">
                  {itemsToDisplay.map((index) => {
                    if (index >= qty) return null;
                    const path = `${src}${(index + 1).toString().padStart(2, "0")}`;
                    const hasSelectedPart = activePart === path;
                    return (
                      <AvatarButtonPickerContainer
                        key={path}
                        className={`group relative p-4 rounded-2xl transition-all duration-300 hover:bg-gray-50 ${
                          hasSelectedPart ? "bg-blue-50" : ""
                        }`}
                        onClick={() => {
                          onPartSelected(part, path);
                          onClose();
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        
                        <div className="relative flex items-center justify-center h-24 w-full">
                          <div className="transform transition-transform duration-300 group-hover:scale-110">
                            <AvatarPart path={path} />
                          </div>
                        </div>

                        {hasSelectedPart && (
                          <div className="absolute top-2 right-2 w-2 h-2">
                            <div className="absolute w-full h-full bg-blue-500 rounded-full animate-ping" />
                            <div className="absolute w-full h-full bg-blue-500 rounded-full" />
                          </div>
                        )}
                      </AvatarButtonPickerContainer>
                    );
                  })}
                </div>

                {isPaginationVisible && (
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <AvatarPartPagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={handlePageChange}
                    />
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
