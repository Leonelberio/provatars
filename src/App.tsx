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
import { Footer } from "./components/Footer";
import { useEffect } from "react";
import { Confetti } from "@neoconfetti/react";

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
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { playPauseSound } = useSounds({ soundEnabled });

  const {
    avatar,
    avatarPartsPickers,
    restAvatarPartsPickers,
    isAvatarModalPickerOpen,
    isBackgroundModalOpen,
    isDownloadOptionModalOpen,
    isHairModalOpen,
    isShared,
    avatarModal,
    avatarCanvasRef,
    showConfetti,
    confettiOptions,
    setAvatar,
    setIsAvatarModalPickerOpen,
    setIsBackgroundModalOpen,
    setIsDownloadOptionModalOpen,
    setIsHairModalOpen,
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
  } = useAvatar({ soundEnabled });

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
          <div className="mx-auto text-center w-full min-h-screen bg-gray-50 text-gray-900 py-4 px-4">
            {/* En-tête minimaliste */}
            <div className="relative mb-4">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Avatartion
              </h1>
            </div>

            <div className="flex flex-col items-center justify-between gap-4">
              {/* Canvas principal simplifié */}
              <div className="relative w-full max-w-md group">
                {showConfetti && <Confetti {...confettiOptions} />}
                <div className="relative p-4 transition-transform duration-700 ease-out hover:scale-[1.02]">
                  <div className="flex items-center justify-center h-[44vh] md:h-[47vh]">
                    <AvatarCanvas {...avatar} ref={avatarCanvasRef} />
                  </div>
                </div>
              </div>
              
              {/* Section des options simplifiée */}
              <div className="w-full max-w-3xl">
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
                          ) : picker.part !== "bg" ? (
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
                                  : picker.part !== "bg"
                                  ? () => openAvatarModalPicker(picker)
                                  : openAvatarBackgroundModal
                              }
                            />
                          )}
                        </div>
                      </div>
                    </AvatarTooltip>
                  ))}
                </div>

                {/* Actions principales */}
                <div className="flex justify-center gap-4 pt-2 border-t border-gray-200">
                  {[
                    { text: "Télécharger", path: "base/Download", action: openAvatarDownloadOptionModal },
                    { text: "Aléatoire", path: "base/Reload", action: handleRandomizeAvatar },
                    { text: "Partager", path: "base/Share", action: share },
                    { text: "Son", path: `base/${soundEnabled ? "SoundLoud" : "SoundOff"}`, action: () => toggleSound(!soundEnabled) }
                  ].map((item) => (
                    <AvatarTooltip key={item.text} text={item.text} width={60}>
                      <div className="group relative">
                        <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative p-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110">
                          <div className="w-8 h-8 text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                            <AvatarPartPicker
                              path={item.path}
                              onClick={item.action}
                            />
                          </div>
                        </div>
                      </div>
                    </AvatarTooltip>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer simplifié */}
            <div className="mt-4">
              <Footer />
            </div>
          </div>
        ) : (
          <div className="mx-auto text-center sm:w-3/4 md:w-1/2">
            <div className="flex items-center justify-center pt-2 md:pt-[2vh] mb-1">
              <Title />
            </div>
            <div className="flex items-center justify-center h-[44vh] md:h-[47vh]">
              <AvatarCanvas {...avatar} ref={avatarCanvasRef} />
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
              </div>
            </div>
            <div className="pb-24">
              <Footer />
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
      <Toaster />
    </>
  );
}

export default App;
