import { useRef, useState, useCallback, useEffect } from "react";
import html2canvas from "html2canvas";
import { backgrounds } from "../constants/backgrounds";
import { useSounds } from "./useSounds";
import toast from "react-hot-toast";
import { useConfetti } from "./useConfetti";
import { ConfettiProps } from "@neoconfetti/react";
import { useAvatarSkinTone } from './useAvatarSkinTone';
import { useSearchParams } from "react-router-dom";

type AvatarPart = {
  src: string;
};

type Avatar = {
  bg: string;
  skinTone: string;
  body: AvatarPart;
  hair: AvatarPart;
  eyes: AvatarPart;
  mouth: AvatarPart;
  head: AvatarPart;
  outfit: AvatarPart;
  accessories: AvatarPart;
  facialHair: AvatarPart;
};

type AvatarModal = {
  title: string;
  part: string;
  src: string;
  qty: number;
  activePart?: string;
};

type AvatarPartPicker = {
  text: string;
  path: string;
  title: string;
  part: string;
  src: string;
  qty: number;
  width?: number;
  isModal?: boolean;
};

type UseAvatarValues = {
  avatar: Avatar;
  avatarModal: AvatarModal;
  avatarPartsPickers: AvatarPartPicker[];
  restAvatarPartsPickers: AvatarPartPicker[];
  activePart: string;
  avatarCanvasRef: React.MutableRefObject<HTMLDivElement | null>;
  isAvatarModalPickerOpen: boolean;
  isBackgroundModalOpen: boolean;
  isHairModalOpen: boolean;
  isDownloadOptionModalOpen: boolean;
  isShared: boolean;
  showConfetti: boolean;
  confettiOptions: ConfettiProps;
  setAvatar: React.Dispatch<React.SetStateAction<Avatar>>;
  setIsAvatarModalPickerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsBackgroundModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsHairModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDownloadOptionModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openAvatarModalPicker: (avatarModal: AvatarModal) => void;
  closeAvatarModalPicker: (part: string, src: string) => void;
  openAvatarBackgroundModal: () => void;
  openAvatarHairModal: () => void;
  openAvatarDownloadOptionModal: () => void;
  handleDownloadAvatarPNG: () => void;
  handleDownloadAvatarSVG: () => void;
  handleRandomizeAvatar: () => void;
  share: () => void;
  serialize: () => string;
  deserialize: (serializedAvatar: string) => void;
  randomize: (overrides?: Partial<Avatar>) => void;
  handleDirectHairSelection: () => void;
  handleDirectFaceSelection: () => void;
  handleDirectEyesSelection: () => void;
  handleDirectMouthSelection: () => void;
  handleDirectOutfitSelection: () => void;
  handleDirectFacialHairSelection: () => void;
  handleDirectAccessoriesSelection: () => void;
<<<<<<< HEAD
  skinTone: string;
  isSkinToneModalOpen: boolean;
  openSkinToneModal: () => void;
  closeSkinToneModal: () => void;
  changeSkinTone: (newSkinTone: string) => void;
=======
  handleDirectBackgroundSelection: () => void;
>>>>>>> 12600e1ad5fee574fd054f54afc8d9235772c626
};

type UseAvatarType = {
  soundEnabled: boolean;
};

const randomPart = (src: string, qty: number) =>
  `${src}${Math.floor(Math.random() * qty + 1)
    .toString()
    .padStart(2, "0")}`;

const getRandomAvatar = (overrides?: Partial<Avatar>) => {
  return {
    bg: backgrounds[Math.floor(Math.random() * backgrounds.length)],
    body: { src: "base/Body" },
    hair: { src: `${randomPart("hairs/Hair", 32)}` },
    eyes: { src: `${randomPart("eyes/Eye", 6)}` },
    mouth: { src: `${randomPart("mouths/Mouth", 10)}` },
    head: { src: `${randomPart("faces/Face", 8)}` },
    outfit: { src: `${randomPart("outfits/Outfit", 25)}` },
    accessories: { src: `${randomPart("accessories/Accessory", 10)}` },
    facialHair: { src: `${randomPart("facial-hair/FacialHair", 8)}` },
    skinTone: "fair",
    ...overrides,
  };
};

const serializeAvatar = (avatar: Avatar): string => {
  const parts = {
    bg: avatar.bg,
    body: avatar.body.src.replace("base/Body", ""),
    hair: avatar.hair.src.replace("hairs/Hair", ""),
    eyes: avatar.eyes.src.replace("eyes/Eye", ""),
    mouth: avatar.mouth.src.replace("mouths/Mouth", ""),
    head: avatar.head.src.replace("faces/Face", ""),
    outfit: avatar.outfit.src.replace("outfits/Outfit", ""),
    accessories: avatar.accessories.src.replace("accessories/Accessory", ""),
    facialHair: avatar.facialHair.src.replace("facial-hair/FacialHair", ""),
    skinTone: avatar.skinTone,
  };

  const buffer = new Uint8Array(9);
  buffer[0] = 0; // FIXME: add suffix for the body too in the assets folder
  buffer[1] = Number(parts.hair);
  buffer[2] = Number(parts.eyes);
  buffer[3] = Number(parts.mouth);
  buffer[4] = Number(parts.head);
  buffer[5] = Number(parts.outfit);
  buffer[6] = Number(parts.accessories);
  buffer[7] = Number(parts.facialHair);
  buffer[8] = backgrounds.indexOf(parts.bg);
  buffer[8] = buffer[8] === -1 ? 0 : buffer[8];

  const serializedAvatar = btoa(
    [...buffer].map((b) => String.fromCharCode(b)).join("")
  );

  return serializedAvatar;
};

const deserializeAvatar = (serializedAvatar: string): Avatar | null => {
  if (!serializedAvatar) return null;

  try {
    const buffer = Uint8Array.from(
      atob(serializedAvatar),
      (c) => c.charCodeAt(0) || 1
    );
    if (buffer.length !== 9) return null;

    const parts = [...buffer].map((b) => b.toString().padStart(2, "0"));
    const background = backgrounds[buffer[8]];

    return {
      bg: background,
      body: { src: "base/Body" },
      hair: { src: `hairs/Hair${parts[1]}` },
      eyes: { src: `eyes/Eye${parts[2]}` },
      mouth: { src: `mouths/Mouth${parts[3]}` },
      head: { src: `faces/Face${parts[4]}` },
      outfit: { src: `outfits/Outfit${parts[5]}` },
      accessories: { src: `accessories/Accessory${parts[6]}` },
      facialHair: { src: `facial-hair/FacialHair${parts[7]}` },
      skinTone: parts[8],
    };
  } catch (error) {
    return null;
  }
};

export const useAvatar = ({ soundEnabled }: UseAvatarType): UseAvatarValues => {
  const [avatar, setAvatar] = useState<Avatar>(() => {
    const urlParams = new URLSearchParams(window.location.search);

    const sharedUrl = urlParams.get("avatar") || urlParams.get("shared") || "";
    const deserialized = deserializeAvatar(sharedUrl);

    if (!deserialized) {
      if (sharedUrl) {
        toast.error("The shared avatar is invalid, randomizing...");
      }

      return getRandomAvatar({
        bg: "bg-red-300",
      });
    }

    return deserialized;
  });
  const [isShared, setIsShared] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.has("shared") || urlParams.has("avatar");
  });
  const [isAvatarModalPickerOpen, setIsAvatarModalPickerOpen] = useState(false);
  const [isBackgroundModalOpen, setIsBackgroundModalOpen] = useState(false);
  const [isDownloadOptionModalOpen, setIsDownloadOptionModalOpen] =
    useState(false);
  const [avatarModal, setAvatarModal] = useState<AvatarModal>({
    title: "",
    part: "",
    src: "",
    qty: 0,
    activePart: "",
  });
  const [activePart, setActivePart] = useState("");
  const avatarCanvasRef = useRef<HTMLDivElement | null>(null);
  const [isHairModalOpen, setIsHairModalOpen] = useState(false);

  const { playClickSound, playBoingSound } = useSounds({ soundEnabled });

  const { showConfetti, confettiOptions, confettiToggle } = useConfetti();

  const {
    skinTone,
    isModalOpen: isSkinToneModalOpen,
    openModal: openSkinToneModal,
    closeModal: closeSkinToneModal,
    changeSkinTone
  } = useAvatarSkinTone();

  const randomize = (overrides?: Partial<Avatar>) => {
    setAvatar(getRandomAvatar(overrides));
  };

  const handleRandomizeAvatar = () => {
    playBoingSound();
    randomize();
    setActivePart("");
  };

  const openAvatarBackgroundModal = () => {
    playClickSound();
    setIsBackgroundModalOpen(true);
  };

  const openAvatarDownloadOptionModal = () => {
    playClickSound();
    setIsDownloadOptionModalOpen(true);
  };

  const handleDownloadAvatarPNG = async () => {
    if (avatarCanvasRef.current === null || avatar === null) {
      return;
    }
    const options =
      avatar.bg === "bg-transparent"
        ? {
            backgroundColor: null,
          }
        : {};

    const canvas = await html2canvas(avatarCanvasRef.current, options),
      data = canvas.toDataURL("image/jpg"),
      link = document.createElement("a");

    link.href = data;
    link.download = "avatartion";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    playClickSound();
    confettiToggle();
  };

  const handleDownloadAvatarSVG = async () => {
    const svgContainer = document.getElementById("avatar-canvas-container");
    const parts = Array.from(
      // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
      svgContainer?.querySelectorAll("svg")!,
      (svg) => ({
        html: svg.outerHTML,
        zIndex: window.getComputedStyle(svg).getPropertyValue("z-index"),
      })
    );
    parts.sort((a, b) => parseInt(a.zIndex) - parseInt(b.zIndex));
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg">${parts
      .map((part) => part.html)
      .join("")}</svg>`;
    const blob = new Blob([svgContent], { type: "image/svg+xml" });
    const objectURL = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = objectURL;
    link.download = "avatartion.svg";
    link.click();
    URL.revokeObjectURL(objectURL);
    playClickSound();
    confettiToggle();
  };

  const openAvatarModalPicker = ({
    title,
    part,
    src,
    qty,
  }: {
    title: string;
    part: string;
    src: string;
    qty: number;
  }) => {
    setIsAvatarModalPickerOpen(true);
    playClickSound();
    setAvatarModal({ title, src, part, qty, activePart });
  };

  const closeAvatarModalPicker = (part: string, src: string) => {
    setIsAvatarModalPickerOpen(false);
    playClickSound();
    setActivePart(src);
    setAvatar((prev) => ({
      ...prev,
      [part]: { src },
    }));
  };

  const share = () => {
    setIsShared(true);

    const url = new URL(window.location.href);
    url.searchParams.set("avatar", serialize());
    window.history.pushState(null, "", url);

    const urlString = url.toString();

    const shareData = {
      title: "Avatartion",
      text: "Check out my avatar!",
      url: urlString,
    };

    if (navigator.share && navigator.canShare(shareData)) {
      navigator.share(shareData);
    } else {
      navigator.clipboard.writeText(urlString);
      toast.success("Link copied to clipboard");
      confettiToggle();
    }
  };

  const serialize = () => {
    return serializeAvatar(avatar);
  };

  const deserializeAndLoad = (serializedAvatar: string) => {
    const deserialized = deserializeAvatar(serializedAvatar);
    if (deserialized) {
      setAvatar(deserialized);
    } else {
      throw new Error("Invalid avatar, cannot load.");
    }
  };

  const avatarPartsPickers: AvatarPartPicker[] = [
    {
      text: "Face",
      path: avatar?.head?.src || "faces/Face01",
      title: "Faces",
      part: "head",
      src: "faces/Face",
      qty: 8,
      width: 60,
      isModal: true,
    },
    {
      text: "Hair",
      path: avatar?.hair?.src || "hairs/Hair01",
      title: "Hairs",
      part: "hair",
      src: "hairs/Hair",
      qty: 32,
      width: 60,
      isModal: true,
    },
    {
      text: "Eyes",
      path: avatar?.eyes?.src || "eyes/Eye01",
      title: "Eyes",
      part: "eyes",
      src: "eyes/Eye",
      qty: 6,
      width: 60,
      isModal: true,
    },
    {
      text: "Mouth",
      path: avatar?.mouth?.src || "mouths/Mouth01",
      title: "Mouths",
      part: "mouth",
      src: "mouths/Mouth",
      qty: 10,
      width: 60,
      isModal: true,
    },
    {
      text: "Outfit",
      path: avatar?.outfit?.src || "outfits/Outfit01",
      title: "Outfits",
      part: "outfit",
      src: "outfits/Outfit",
      qty: 25,
      width: 60,
      isModal: true,
    },
    {
      text: "Accessories",
      path: avatar?.accessories?.src || "accessories/Accessory01",
      title: "Accessories",
      part: "accessories",
      src: "accessories/Accessory",
      qty: 10,
      width: 60,
      isModal: true,
    },
    {
      text: "Others",
      path: avatar?.facialHair?.src || "facial-hair/FacialHair01",
      title: "Facial Hair",
      part: "facialHair",
      src: "facial-hair/FacialHair",
      qty: 8,
      width: 60,
      isModal: true,
    },
    {
      text: "Background",
      path: avatar?.bg || "bg-transparent",
      title: "Backgrounds",
      part: "bg",
      src: "bg-transparent",
      qty: 0,
      width: 60,
      isModal: true,
    },
  ];

  const excludedAvatarPartsPickers = ["facialHair", "accessories", "bg"];
  const filteredAvatarPartsPickers = avatarPartsPickers.filter(
    (picker) => !excludedAvatarPartsPickers.includes(picker.part)
  );
  const restAvatarPartsPickers = avatarPartsPickers.filter((picker) =>
    excludedAvatarPartsPickers.includes(picker.part)
  );

  const openAvatarHairModal = useCallback(() => {
    setIsHairModalOpen(true);
    playClickSound();
  }, [playClickSound]);

  const handleDirectHairSelection = useCallback(() => {
    const currentHairNumber = parseInt(avatar.hair.src.replace("hairs/Hair", "")) || 1;
    const nextHairNumber = currentHairNumber >= 32 ? 1 : currentHairNumber + 1;
    const nextHairPath = `hairs/Hair${nextHairNumber.toString().padStart(2, "0")}`;
    
    setAvatar((prev) => ({
      ...prev,
      hair: { src: nextHairPath }
    }));
    playClickSound();
  }, [avatar.hair.src, playClickSound]);

  const handleDirectFaceSelection = useCallback(() => {
    const currentFaceNumber = parseInt(avatar.head.src.replace("faces/Face", "")) || 1;
    const nextFaceNumber = currentFaceNumber >= 8 ? 1 : currentFaceNumber + 1;
    const nextFacePath = `faces/Face${nextFaceNumber.toString().padStart(2, "0")}`;
    
    setAvatar((prev) => ({
      ...prev,
      head: { src: nextFacePath }
    }));
    playClickSound();
  }, [avatar.head.src, playClickSound]);

  const handleDirectEyesSelection = useCallback(() => {
    const currentEyesNumber = parseInt(avatar.eyes.src.replace("eyes/Eye", "")) || 1;
    const nextEyesNumber = currentEyesNumber >= 6 ? 1 : currentEyesNumber + 1;
    const nextEyesPath = `eyes/Eye${nextEyesNumber.toString().padStart(2, "0")}`;
    
    setAvatar((prev) => ({
      ...prev,
      eyes: { src: nextEyesPath }
    }));
    playClickSound();
  }, [avatar.eyes.src, playClickSound]);

  const handleDirectMouthSelection = useCallback(() => {
    const currentMouthNumber = parseInt(avatar.mouth.src.replace("mouths/Mouth", "")) || 1;
    const nextMouthNumber = currentMouthNumber >= 10 ? 1 : currentMouthNumber + 1;
    const nextMouthPath = `mouths/Mouth${nextMouthNumber.toString().padStart(2, "0")}`;
    
    setAvatar((prev) => ({
      ...prev,
      mouth: { src: nextMouthPath }
    }));
    playClickSound();
  }, [avatar.mouth.src, playClickSound]);

  const handleDirectOutfitSelection = useCallback(() => {
    const currentOutfitNumber = parseInt(avatar.outfit.src.replace("outfits/Outfit", "")) || 1;
    const nextOutfitNumber = currentOutfitNumber >= 25 ? 1 : currentOutfitNumber + 1;
    const nextOutfitPath = `outfits/Outfit${nextOutfitNumber.toString().padStart(2, "0")}`;
    
    setAvatar((prev) => ({
      ...prev,
      outfit: { src: nextOutfitPath }
    }));
    playClickSound();
  }, [avatar.outfit.src, playClickSound]);

  const handleDirectFacialHairSelection = useCallback(() => {
    const currentFacialHairNumber = parseInt(avatar.facialHair.src.replace("facial-hair/FacialHair", "")) || 1;
    const nextFacialHairNumber = currentFacialHairNumber >= 8 ? 1 : currentFacialHairNumber + 1;
    const nextFacialHairPath = `facial-hair/FacialHair${nextFacialHairNumber.toString().padStart(2, "0")}`;
    
    setAvatar((prev) => ({
      ...prev,
      facialHair: { src: nextFacialHairPath }
    }));
    playClickSound();
  }, [avatar.facialHair.src, playClickSound]);

  const handleDirectAccessoriesSelection = useCallback(() => {
    const currentAccessoriesNumber = parseInt(avatar.accessories.src.replace("accessories/Accessory", "")) || 1;
    const nextAccessoriesNumber = currentAccessoriesNumber >= 10 ? 1 : currentAccessoriesNumber + 1;
    const nextAccessoriesPath = `accessories/Accessory${nextAccessoriesNumber.toString().padStart(2, "0")}`;
    
    setAvatar((prev) => ({
      ...prev,
      accessories: { src: nextAccessoriesPath }
    }));
    playClickSound();
  }, [avatar.accessories.src, playClickSound]);

  const handleDirectBackgroundSelection = useCallback(() => {
    const currentIndex = backgrounds.indexOf(avatar.bg);
    const nextIndex = currentIndex >= backgrounds.length - 1 ? 0 : currentIndex + 1;
    const nextBackground = backgrounds[nextIndex];
    
    setAvatar((prev) => ({
      ...prev,
      bg: nextBackground
    }));
    playClickSound();
  }, [avatar.bg, playClickSound]);

  return {
    avatar: {
      ...avatar,
      skinTone
    },
    skinTone,
    isSkinToneModalOpen,
    openSkinToneModal,
    closeSkinToneModal,
    changeSkinTone,
    avatarModal,
    activePart,
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
    handleDownloadAvatarPNG,
    handleDownloadAvatarSVG,
    handleRandomizeAvatar,
    openAvatarDownloadOptionModal,
    share,
    isShared,
    serialize,
    deserialize: deserializeAndLoad,
    randomize,
    isHairModalOpen,
    setIsHairModalOpen,
    openAvatarHairModal,
    handleDirectHairSelection,
    handleDirectFaceSelection,
    handleDirectEyesSelection,
    handleDirectMouthSelection,
    handleDirectOutfitSelection,
    handleDirectFacialHairSelection,
    handleDirectAccessoriesSelection,
    handleDirectBackgroundSelection,
  };
};
