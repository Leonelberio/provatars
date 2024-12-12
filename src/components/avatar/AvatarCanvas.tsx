import React, { Suspense } from "react";
import { Part } from "../parts/Part";
import { PartIndexEnum } from "../../constants/parts";
import { SvgAvatarContainer } from "./SvgAvatarContainer";

type AvatarPart = {
  src: string;
};

type AvatarCanvasProps = {
  bg: string;
  skinTone: string;
  hair: AvatarPart;
  eyes: AvatarPart;
  mouth: AvatarPart;
  head: AvatarPart;
  outfit: AvatarPart;
  body: AvatarPart;
  accessories: AvatarPart;
  facialHair: AvatarPart;
  focusedPart?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const AvatarCanvas = React.forwardRef<HTMLDivElement, AvatarCanvasProps>(
  (
    {
      bg = "bg-red-300",
      skinTone = "bg-[#FFE5C4]",
      hair,
      eyes,
      mouth,
      head,
      outfit,
      body,
      accessories,
      facialHair,
      focusedPart,
      ...rest
    },
    ref
  ) => {
    const renderAvatarPart = (part: AvatarPart, type: string) => {
      const isFocused = focusedPart === type;
      
      return (
        <Suspense>
          <Part
            src={part.src}
            style={{
              zIndex: PartIndexEnum[type as unknown as PartIndexEnum],
              position: 'absolute',
              pointerEvents: 'none',
              transition: 'all 0.2s ease-in-out',
              filter: focusedPart && !isFocused ? 'brightness(0.9)' : 'none',
              transform: isFocused ? 'scale(1.01)' : 'scale(1)',
            }}
          />
        </Suspense>
      );
    };

    return (
      <SvgAvatarContainer
        ref={ref}
        skinTone={skinTone}
        className={`absolute w-80 h-[294px] overflow-hidden ${bg} rounded-2xl`}
        {...rest}
      >
        {renderAvatarPart(body, "body")}
        {renderAvatarPart(hair, "hair")}
        {renderAvatarPart(eyes, "eyes")}
        {renderAvatarPart(mouth, "mouth")}
        {renderAvatarPart(head, "head")}
        {renderAvatarPart(outfit, "outfit")}
        {renderAvatarPart(accessories, "accessories")}
        {renderAvatarPart(facialHair, "facial-hair")}
      </SvgAvatarContainer>
    );
  }
);