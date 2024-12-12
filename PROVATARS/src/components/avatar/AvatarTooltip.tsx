import { ReactNode, useState, KeyboardEvent, useCallback, useEffect, TouchEvent } from 'react';
import { Transition } from '@headlessui/react';
import { useMediaQuery } from '@react-hook/media-query';

type Props = {
  text: string;
  width?: number;
  children: ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export const AvatarTooltip = ({ text, width = 20, children, onMouseEnter, onMouseLeave }: Props) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const isMobile = useMediaQuery('(max-width: 640px)');
  const [touchStartTime, setTouchStartTime] = useState(0);

  const getWidthClass = (w: number) => {
    const widthMap: { [key: number]: string } = {
      20: 'w-20',
      40: 'w-40',
      60: 'w-60',
      80: 'w-80'
    };
    return widthMap[w] || 'w-20';
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    if (isHovering) {
      timeoutId = setTimeout(() => {
        setShowTooltip(true);
        if (onMouseEnter) onMouseEnter();
      }, 100);
    } else {
      timeoutId = setTimeout(() => {
        setShowTooltip(false);
        if (onMouseLeave) onMouseLeave();
      }, 150);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isHovering, onMouseEnter, onMouseLeave]);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    setTouchStartTime(Date.now());
  }, []);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    const touchDuration = Date.now() - touchStartTime;
    if (touchDuration < 500) {
      if (window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(50);
      }
      setIsHovering(!isHovering);
    }
  }, [isHovering, touchStartTime]);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsHovering(!isHovering);
    }
    if (event.key === 'Escape' && showTooltip) {
      setIsHovering(false);
    }
  }, [isHovering, showTooltip]);

  if (isMobile) {
    return (
      <div 
        className="relative touch-none select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="active:scale-95 transition-transform duration-150">
          {children}
        </div>
        <Transition
          show={showTooltip}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <div
            className={`fixed z-50 ${getWidthClass(width)} p-2 bg-black/90 backdrop-blur-sm rounded-lg shadow-lg bottom-4 left-1/2 transform -translate-x-1/2`}
            role="tooltip"
          >
            <p className="text-white text-sm font-medium">{text}</p>
          </div>
        </Transition>
      </div>
    );
  }

  return (
    <div 
      className="relative" 
      role="tooltip" 
      aria-label={text}
    >
      <div
        className="inline-block outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 rounded-lg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-expanded={showTooltip}
        aria-describedby={`tooltip-${text.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {children}
      </div>
      <Transition
        show={showTooltip}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <div
          id={`tooltip-${text.toLowerCase().replace(/\s+/g, '-')}`}
          className={`absolute z-10 ${getWidthClass(width)} p-2 bg-black/90 backdrop-blur-sm rounded-lg shadow-lg -top-[110px] left-1/2 transform -translate-x-1/2`}
          role="tooltip"
        >
          <p className="text-white text-sm font-medium">{text}</p>
        </div>
      </Transition>
    </div>
  );
};
