import React, { useEffect, useState } from "react";
import { useLocalStorage, useMediaQuery } from "usehooks-ts";
import { Toaster } from "react-hot-toast";
import { useAvatar } from "./hooks/useAvatar";
import { useSounds } from "./hooks/useSounds";
import { AvatarPartPicker } from "./components/avatar/AvatarPartPicker";
import { AvatarTooltip } from "./components/avatar/AvatarTooltip";
import { AvatarCanvas } from "./components/avatar/AvatarCanvas";
import { AvatarBackgroundModal } from "./components/avatar/AvatarBackgroundModal";
import { AvatarPartModal } from "./components/avatar/AvatarPartModal";
import { AvatarDownloadOptionModal } from "./components/avatar/AvatarDownloadOptionModal";
import { AvatarBackgroundPicker } from "./components/avatar/AvatarBackgroundPicker";
import { Selector } from "./components/parts/Selector";
import { Confetti } from "@neoconfetti/react";
import ModernFooter from "./components/ModernFooter";
import ModernHeader from "./components/ModernHeader";
import { useSkinTone } from './hooks/useSkinTone';
import { AvatarSkinToneModal } from './components/avatar/AvatarSkinToneModal';

const Title = () => <h1 className="font-bold text-3xl">Avatartion</h1>;

interface AvatarPicker {
  text: string;
  path: string;
  title: string;
  part: string;
  src: string;
  qty: number;
  width?: number;
  isModal?: boolean;
}

function App() {
  const [soundEnabled, setSoundEnabled] = useLocalStorage("soundEnabled", true);
  const [focusedPart, setFocusedPart] = useState<string | undefined>();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { playPauseSound } = useSounds({ soundEnabled });

  const {
    avatar,
    avatarPartsPickers,
    restAvatarPartsPickers,
    isAvatarModalPickerOpen,
    isBackgroundModalOpen,
    isDownloadOptionModalOpen,
    isSkinToneModalOpen,
    openSkinToneModal,
    closeSkinToneModal,
    changeSkinTone,
    isShared,
    avatarModal,
    avatarCanvasRef,
    showConfetti,
    confettiOptions,
    setAvatar,
    setIsAvatarModalPickerOpen,
    setIsBackgroundModalOpen,
    setIsDownloadOptionModalOpen,
    openAvatarModalPicker,
    closeAvatarModalPicker,
    openAvatarBackgroundModal,
    openAvatarHairModal,
    handleDownloadAvatarPNG,
    handleDownloadAvatarSVG,
    handleRandomizeAvatar,
    openAvatarDownloadOptionModal,
    share,
    handleDirectHairSelection,
    handleDirectFaceSelection,
    handleDirectEyesSelection,
    handleDirectMouthSelection,
    handleDirectOutfitSelection,
    handleDirectFacialHairSelection,
    handleDirectAccessoriesSelection,
    handleDirectBackgroundSelection,
  } = useAvatar({ soundEnabled });

  const {
    skinTone,
    isSkinToneModalOpen,
    openSkinToneModal,
    closeSkinToneModal,
    handleSkinToneChange,
  } = useSkinTone();

  useEffect(() => {
    if (!isShared) return;
    const currentParams = new URLSearchParams(window.location.search);
    window.history.pushState(null, "", `?${currentParams.toString()}`);
  }, [avatar, isShared]);

  const toggleSound = (enabled: boolean) => {
    setSoundEnabled(enabled);
    playPauseSound();
  };

  if (!avatar) return null;

  return (
    <>
      <div className="overflow-hidden">
        {!isMobile ? (
          <div className="mx-auto text-center w-full min-h-screen bg-gray-50 text-gray-900">
            {/* Nouveau header moderne */}
            <ModernHeader />

            <div className="flex flex-col items-center justify-between gap-4 py-4 px-4">
              {/* Canvas principal simplifié */}
              <div className="relative w-full max-w-md group">
                {showConfetti && <Confetti {...confettiOptions} />}
                <div className="relative p-4 transition-transform duration-700 ease-out hover:scale-[1.02]">
                  <div className="flex items-center justify-center h-[44vh] md:h-[47vh]">
                    <AvatarCanvas {...avatar} ref={avatarCanvasRef} focusedPart={focusedPart} />
                  </div>
                </div>
              </div>
              
              {/* Nouvelle barre de contrôles */}
              <div className="w-full max-w-3xl">
<<<<<<< HEAD
                <div className="bg-[#009CF5] rounded-[32px] p-3 flex items-center justify-between space-x-2">
                  <div className="flex items-center space-x-2">
                    {[...avatarPartsPickers, ...restAvatarPartsPickers].map((picker: AvatarPicker) => (
                      <AvatarTooltip
                        key={picker.path}
                        text={picker.text}
                        width={picker.width}
                        onMouseEnter={() => setFocusedPart(picker.part)}
                        onMouseLeave={() => setFocusedPart(undefined)}
                      >
                        {picker.part === "hair" ? (
                          <AvatarPartPicker
                            path={picker.path}
                            onDirectHairSelect={handleDirectHairSelection}
                            isActive={focusedPart === picker.part}
                          />
                        ) : picker.part === "head" ? (
                          <AvatarPartPicker
                            path={picker.path}
                            onDirectFaceSelect={handleDirectFaceSelection}
                            isActive={focusedPart === picker.part}
                          />
                        ) : picker.part === "eyes" ? (
                          <AvatarPartPicker
                            path={picker.path}
                            onDirectEyesSelect={handleDirectEyesSelection}
                            isActive={focusedPart === picker.part}
                          />
                        ) : picker.part === "mouth" ? (
                          <AvatarPartPicker
                            path={picker.path}
                            onDirectMouthSelect={handleDirectMouthSelection}
                            isActive={focusedPart === picker.part}
                          />
                        ) : picker.part === "outfit" ? (
                          <AvatarPartPicker
                            path={picker.path}
                            onDirectOutfitSelect={handleDirectOutfitSelection}
                            isActive={focusedPart === picker.part}
                          />
                        ) : picker.part === "facialHair" ? (
                          <AvatarPartPicker
                            path={picker.path}
                            onDirectFacialHairSelect={handleDirectFacialHairSelection}
                            isActive={focusedPart === picker.part}
                          />
                        ) : picker.part === "accessories" ? (
                          <AvatarPartPicker
                            path={picker.path}
                            onDirectAccessoriesSelect={handleDirectAccessoriesSelection}
                            isActive={focusedPart === picker.part}
                          />
                        ) : picker.part === "bg" ? (
                          <AvatarPartPicker
                            path={picker.path}
                            onClick={openAvatarBackgroundModal}
                            isActive={focusedPart === picker.part}
                          />
                        ) : (
                          <AvatarPartPicker
                            path={picker.path}
                            onClick={() => openAvatarModalPicker(picker)}
                            isActive={focusedPart === picker.part}
                          />
                        )}
                      </AvatarTooltip>
                    ))}
                  </div>
=======
                {/* Grille des options principales */}
                <div className="grid grid-cols-4 md:grid-cols-8 gap-1 mb-2">
                  {[...avatarPartsPickers, ...restAvatarPartsPickers].map((picker: AvatarPicker) => (
                    <AvatarTooltip
                      key={picker.path}
                      text={picker.text}
                      width={picker.width}
                    >
                      <div className="group relative">
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative flex items-center justify-center p-3 rounded-2xl hover:bg-gray-100 transition-all duration-300 cursor-pointer">
                          {picker.part === "hair" ? (
                            <AvatarPartPicker
                              path={picker.path}
                              onDirectHairSelect={handleDirectHairSelection}
                            />
                          ) : picker.part === "head" ? (
                            <AvatarPartPicker
                              path={picker.path}
                              onDirectFaceSelect={handleDirectFaceSelection}
                            />
                          ) : picker.part === "eyes" ? (
                            <AvatarPartPicker
                              path={picker.path}
                              onDirectEyesSelect={handleDirectEyesSelection}
                            />
                          ) : picker.part === "mouth" ? (
                            <AvatarPartPicker
                              path={picker.path}
                              onDirectMouthSelect={handleDirectMouthSelection}
                            />
                          ) : picker.part === "outfit" ? (
                            <AvatarPartPicker
                              path={picker.path}
                              onDirectOutfitSelect={handleDirectOutfitSelection}
                            />
                          ) : picker.part === "facialHair" ? (
                            <AvatarPartPicker
                              path={picker.path}
                              onDirectFacialHairSelect={handleDirectFacialHairSelection}
                            />
                          ) : picker.part === "accessories" ? (
                            <AvatarPartPicker
                              path={picker.path}
                              onDirectAccessoriesSelect={handleDirectAccessoriesSelection}
                            />
                          ) : picker.part === "bg" ? (
                            <AvatarBackgroundPicker
                              color={avatar.bg}
                              onClick={handleDirectBackgroundSelection}
                            />
                          ) : (
                            <AvatarPartPicker
                              path={picker.path}
                              onClick={() => openAvatarModalPicker(picker)}
                            />
                          )}
                          {picker.isModal && (
                            <Selector
                              onSelectorClick={
                                picker.part === "hair"
                                  ? handleDirectHairSelection
                                  : picker.part === "head"
                                  ? handleDirectFaceSelection
                                  : picker.part === "eyes"
                                  ? handleDirectEyesSelection
                                  : picker.part === "mouth"
                                  ? handleDirectMouthSelection
                                  : picker.part === "outfit"
                                  ? handleDirectOutfitSelection
                                  : picker.part === "facialHair"
                                  ? handleDirectFacialHairSelection
                                  : picker.part === "accessories"
                                  ? handleDirectAccessoriesSelection
                                  : picker.part === "bg"
                                  ? handleDirectBackgroundSelection
                                  : () => openAvatarModalPicker(picker)
                              }
                            />
                          )}
                        </div>
                      </div>
                    </AvatarTooltip>
                  ))}
                </div>
>>>>>>> 12600e1ad5fee574fd054f54afc8d9235772c626

                  {/* Séparateur vertical */}
                  <div className="w-px h-8 bg-white/20" />

                  {/* Actions principales */}
                  <div className="flex items-center space-x-2">
                    <AvatarTooltip text="Télécharger" width={60}>
                      <AvatarPartPicker
                        path="base/Download"
                        onClick={openAvatarDownloadOptionModal}
                      />
                    </AvatarTooltip>
                    <AvatarTooltip text="Aléatoire" width={60}>
                      <AvatarPartPicker
                        path="base/Reload"
                        onClick={handleRandomizeAvatar}
                      />
                    </AvatarTooltip>
                    <AvatarTooltip text="Partager" width={60}>
                      <AvatarPartPicker
                        path="base/Share"
                        onClick={share}
                      />
                    </AvatarTooltip>
                    <AvatarTooltip text="Son" width={60}>
                      <AvatarPartPicker
                        path={`base/${soundEnabled ? "SoundLoud" : "SoundOff"}`}
                        onClick={() => toggleSound(!soundEnabled)}
                      />
                    </AvatarTooltip>
                    <AvatarTooltip text="Couleur de peau" width={80}>
                      <AvatarPartPicker
                        path="base/SkinTone"
                        onClick={openSkinToneModal}
                        isActive={focusedPart === 'skinTone'}
                        onMouseEnter={() => setFocusedPart('skinTone')}
                        onMouseLeave={() => setFocusedPart(undefined)}
                      />
                    </AvatarTooltip>
                  </div>
                </div>
              </div>
            </div>

            {/* Nouveau footer moderne */}
            <ModernFooter />
          </div>
        ) : (
          <div className="mx-auto text-center sm:w-3/4 md:w-1/2">
            <div className="flex items-center justify-center pt-2 md:pt-[2vh] mb-1">
              <Title />
            </div>
            <div className="flex items-center justify-center h-[44vh] md:h-[47vh]">
              <AvatarCanvas {...avatar} ref={avatarCanvasRef} focusedPart={focusedPart} />
            </div>
            <div className="flex items-center justify-center">
              {showConfetti && <Confetti {...confettiOptions} />}
              <div className="flex flex-col items-center justify-center px-4 pt-6 space-y-2 overflow-x-auto">
                <div className="flex space-x-1 md:space-x-2">
                  {avatarPartsPickers.map((picker: AvatarPicker) => (
                    <AvatarTooltip
                      key={picker.path}
                      text={picker.text}
                      width={picker.width}
                    >
                      <div className="flex items-center overflow-x-auto">
                        <AvatarPartPicker
                          path={picker.path}
                          onClick={() => openAvatarModalPicker(picker)}
                        />
                      </div>
                    </AvatarTooltip>
                  ))}
                </div>
                <div className="flex space-x-1 md:space-x-2">
                  {restAvatarPartsPickers.map((picker: AvatarPicker) => (
                    <AvatarTooltip
                      key={picker.path}
                      text={picker.text}
                      width={picker.width}
                    >
                      <div className="flex items-center overflow-x-auto">
                        {picker.part !== "bg" ? (
                          <AvatarPartPicker
                            path={picker.path}
                            onClick={() => openAvatarModalPicker(picker)}
                          />
                        ) : (
                          <AvatarBackgroundPicker
                            color={avatar.bg}
                            onClick={openAvatarBackgroundModal}
                          />
                        )}
                      </div>
                    </AvatarTooltip>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex space-x-2 md:space-x-4 pt-6">
                <AvatarTooltip text="Télécharger" width={60}>
                  <AvatarPartPicker
                    path="base/Download"
                    onClick={openAvatarDownloadOptionModal}
                  />
                </AvatarTooltip>
                <AvatarTooltip text="Aléatoire" width={60}>
                  <AvatarPartPicker
                    path="base/Reload"
                    onClick={handleRandomizeAvatar}
                  />
                </AvatarTooltip>
                <AvatarTooltip text="Partager" width={60}>
                  <AvatarPartPicker
                    path="base/Share"
                    onClick={share}
                  />
                </AvatarTooltip>
                <AvatarTooltip text="Son" width={60}>
                  <AvatarPartPicker
                    path={`base/${soundEnabled ? "SoundLoud" : "SoundOff"}`}
                    onClick={() => toggleSound(!soundEnabled)}
                  />
                </AvatarTooltip>
                <AvatarTooltip text="Couleur de peau" width={80}>
                  <AvatarPartPicker
                    path="base/SkinTone"
                    onClick={openSkinToneModal}
                    isActive={focusedPart === 'skinTone'}
                    onMouseEnter={() => setFocusedPart('skinTone')}
                    onMouseLeave={() => setFocusedPart(undefined)}
                  />
                </AvatarTooltip>
              </div>
            </div>
            <div className="pb-24">
              <ModernFooter />
            </div>
          </div>
        )}
      </div>
      <AvatarPartModal
        {...avatarModal}
        isOpen={isAvatarModalPickerOpen}
        onPartSelected={closeAvatarModalPicker}
        onClose={() => setIsAvatarModalPickerOpen(false)}
      />
      <AvatarBackgroundModal
        isOpen={isBackgroundModalOpen}
        activeBackground={avatar.bg}
        onBackgroundSelected={(bg) => setAvatar((prev) => ({ ...prev, bg }))}
        onClose={() => setIsBackgroundModalOpen(false)}
      />
      <AvatarDownloadOptionModal
        isOpen={isDownloadOptionModalOpen}
        onDownloadOption={(option: "SVG" | "PNG") =>
          option === "SVG" ? handleDownloadAvatarSVG() : handleDownloadAvatarPNG()
        }
        onClose={() => setIsDownloadOptionModalOpen(false)}
      />
      <AvatarSkinToneModal
        isOpen={isSkinToneModalOpen}
        onClose={closeSkinToneModal}
        onSkinToneSelected={changeSkinTone}
        activeSkinTone={avatar.skinTone}
      />
      <Toaster />
    </>
  );
}

export default App;
