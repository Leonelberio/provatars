import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-32 h-auto" }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 245.32 65.02" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <g>
          <polygon points="108.38 26.28 98.74 26.28 98.74 10.04 95.36 10.04 95.36 29.52 108.38 29.52 108.38 26.28"/>
          <path d="m107.13,37.64c-1.56-.85-3.31-1.28-5.2-1.28h-6.57v19.49h6.57c1.9,0,3.66-.43,5.2-1.27,1.55-.87,2.77-2.05,3.63-3.52.87-1.49,1.31-3.15,1.31-4.95s-.44-3.49-1.31-4.96c-.87-1.48-2.09-2.66-3.63-3.51Zm.72,11.84c-.54.93-1.29,1.68-2.24,2.22l-.14.08c-.58.31-1.22.54-1.89.67l-1.34.16h-3.5v-13h3.19c1.36,0,2.52.28,3.56.84,1,.54,1.79,1.31,2.36,2.29.56.98.85,2.11.85,3.37s-.29,2.39-.85,3.37Z"/>
          <polygon points="110.38 29.52 124.31 29.52 124.31 26.28 113.75 26.28 113.75 21.34 122.33 21.34 122.33 18.09 113.75 18.09 113.75 13.28 124.31 13.28 124.31 10.04 110.37 10.04 110.37 29.03 110.38 29.03 110.38 29.52"/>
          <polygon points="114.09 55.84 114.59 55.84 114.59 55.85 128.03 55.85 128.03 52.61 117.46 52.61 117.46 47.66 126.05 47.66 126.05 44.42 117.46 44.42 117.46 39.61 128.03 39.61 128.03 36.36 114.09 36.36 114.09 55.84"/>
          <path d="m138.58,29.27c1.14-.53,2.03-1.25,2.63-2.14.6-.9.91-1.9.91-2.99,0-1.24-.35-2.27-1.05-3.07-.66-.76-1.48-1.35-2.43-1.75-.91-.38-2.09-.78-3.52-1.18-1.12-.31-1.97-.57-2.58-.8-.57-.22-1.05-.52-1.43-.88-.32-.3-.48-.69-.48-1.16,0-.44.13-.85.4-1.22.27-.39.68-.7,1.25-.95s1.27-.38,2.08-.38c1.23,0,2.2.26,2.9.76.71.5,1.15,1.09,1.37,1.8l.11.35h3.38l-.15-.62c-.22-.97-.65-1.89-1.26-2.71-.62-.84-1.47-1.53-2.55-2.04-1.06-.52-2.34-.78-3.8-.78s-2.63.26-3.71.78-1.92,1.23-2.51,2.11c-.59.89-.88,1.86-.88,2.89,0,1.25.35,2.28,1.05,3.07.66.75,1.47,1.32,2.4,1.7.9.37,2.07.75,3.49,1.16,1.09.3,1.97.58,2.61.83.57.22,1.06.51,1.44.88.33.32.5.72.5,1.21s-.14.94-.41,1.32c-.28.4-.73.72-1.33.96-.63.26-1.43.39-2.39.39-1.35,0-2.41-.31-3.22-.94s-1.33-1.37-1.58-2.26l-.11-.37h-3.37l.13.61c.24,1.09.7,2.11,1.35,3.03.66.95,1.58,1.72,2.72,2.3,1.14.58,2.51.88,4.08.88s2.85-.27,3.96-.79Z"/>
          <polygon points="137.66 36.36 134.28 36.36 134.28 55.84 134.78 55.84 134.78 55.85 147.3 55.85 147.3 52.61 137.66 52.61 137.66 36.36"/>
          <path d="m153.64,23.18h4.91c1.44,0,2.74-.28,3.85-.84,1.12-.57,1.99-1.36,2.61-2.37.6-1,.91-2.13.91-3.36s-.31-2.37-.92-3.37c-.61-.99-1.48-1.79-2.6-2.36-1.1-.56-2.4-.84-3.85-.84h-8.29v19.48h3.38v-6.34Zm0-9.9h4.91c1.29,0,2.3.31,2.98.93.68.61,1.01,1.4,1.01,2.4s-.34,1.8-1,2.4c-.69.62-1.7.93-2.99.93h-4.91v-6.66Z"/>
          <path d="m162.49,36.36h-8.04l-5.01,19.49h3.41l1.35-5.04.1-.37h8.35l.1.37,1.35,5.04h3.4l-4.91-19.11-.1-.38Zm-7.4,10.83l.17-.62,1.72-6.59.09-.37h2.8l.1.37,1.72,6.59.16.62h-6.76Z"/>
          <path d="m175.3,22.88l4.35,6.64h3.97l-4.52-6.78-.35-.52.58-.23c1.04-.4,1.9-.99,2.57-1.76.94-1.09,1.42-2.39,1.42-3.88,0-1.2-.3-2.3-.88-3.25-.58-.95-1.44-1.72-2.54-2.26-1.09-.53-2.37-.8-3.82-.8h-8.42v19.48h3.38v-6.87h4.12l.14.23Zm-4.26-9.6h5.04c1.28,0,2.26.28,2.92.84.63.55.95,1.28.95,2.23s-.31,1.67-.95,2.22c-.61.52-1.5.8-2.64.84h-5.32v-6.13Z"/>
          <polygon points="173.44 39.61 179.78 39.61 179.78 55.86 183.16 55.86 183.16 39.61 189.5 39.61 189.5 36.37 173.44 36.37 173.44 39.61"/>
          <path d="m200.65,10.75c-1.54-.87-3.28-1.32-5.19-1.32s-3.66.45-5.19,1.32c-1.53.88-2.75,2.12-3.63,3.68-.88,1.55-1.32,3.33-1.32,5.27s.44,3.72,1.32,5.28,2.1,2.79,3.63,3.67c1.54.88,3.28,1.32,5.19,1.32s3.66-.44,5.19-1.32c1.53-.88,2.76-2.11,3.63-3.67.88-1.56,1.32-3.33,1.32-5.28s-.44-3.71-1.32-5.27c-.87-1.56-2.1-2.8-3.63-3.68Zm.71,12.64c-.57,1.06-1.36,1.86-2.4,2.45-1.03.59-2.21.89-3.5.89s-2.47-.29-3.51-.89c-1.03-.58-1.81-1.39-2.39-2.45-.58-1.07-.87-2.28-.87-3.69s.29-2.62.87-3.68c.57-1.06,1.36-1.86,2.4-2.46,1.04-.59,2.19-.88,3.5-.88s2.47.29,3.5.88l.05.03c1,.58,1.79,1.4,2.35,2.43.58,1.06.87,2.3.87,3.68s-.29,2.63-.87,3.69Z"/>
          <polygon points="191.6 55.84 192.1 55.84 192.1 55.85 205.54 55.85 205.54 52.61 194.98 52.61 194.98 47.66 203.56 47.66 203.56 44.42 194.98 44.42 194.98 39.61 205.54 39.61 205.54 36.36 191.6 36.36 191.6 55.84"/>
          <path d="m218.24,26.34c-.64.26-1.44.39-2.39.39-1.36,0-2.41-.31-3.22-.94s-1.33-1.37-1.59-2.27l-.1-.36h-3.38l.14.61c.24,1.08.69,2.1,1.34,3.03.67.95,1.58,1.72,2.72,2.3,1.15.58,2.52.87,4.09.87s2.84-.26,3.96-.78c1.14-.53,2.02-1.25,2.62-2.14.61-.91.92-1.91.92-2.99,0-1.24-.35-2.28-1.05-3.08-.66-.75-1.48-1.34-2.43-1.74-.91-.38-2.1-.78-3.52-1.18-1.12-.31-1.96-.57-2.58-.81-.58-.22-1.05-.51-1.43-.87-.33-.31-.48-.69-.48-1.17,0-.43.13-.84.39-1.21.28-.39.69-.7,1.25-.95.57-.25,1.27-.38,2.08-.38,1.23,0,2.21.25,2.91.75.7.5,1.15,1.09,1.37,1.8l.1.35h3.38l-.14-.61c-.23-.97-.65-1.89-1.26-2.72-.62-.84-1.48-1.52-2.55-2.04-1.07-.51-2.35-.77-3.81-.77-1.38,0-2.63.26-3.7.77-1.08.53-1.92,1.24-2.51,2.12-.59.88-.89,1.86-.89,2.89,0,1.25.36,2.28,1.05,3.06.67.76,1.48,1.33,2.41,1.71.9.36,2.07.75,3.49,1.15,1.08.3,1.96.58,2.6.83.58.22,1.07.52,1.45.88.33.33.49.72.49,1.22s-.13.93-.41,1.32c-.28.39-.72.72-1.32.96Z"/>
          <path d="m224.22,48.58c-.44,1.28-1.2,2.34-2.3,3.24-1.08.89-2.42,1.32-4.09,1.32-1.32,0-2.47-.29-3.51-.89-1.03-.59-1.82-1.39-2.39-2.45l-.03-.06c-.56-1.04-.84-2.26-.84-3.62s.29-2.63.87-3.69c.57-1.06,1.36-1.86,2.39-2.46,1.05-.59,2.2-.88,3.51-.88,1.63,0,2.94.39,4,1.2,1.08.83,1.82,1.79,2.26,2.96l.13.33h3.39l-.19-.64c-.36-1.25-.95-2.42-1.76-3.48-.8-1.07-1.88-1.94-3.21-2.61-1.33-.67-2.88-1.01-4.62-1.01-1.91,0-3.66.45-5.19,1.33-1.53.87-2.76,2.11-3.63,3.67-.88,1.56-1.32,3.33-1.32,5.28s.44,3.71,1.32,5.27c.87,1.56,2.1,2.8,3.63,3.68,1.54.87,3.28,1.32,5.19,1.32h.27s.16-.02.16-.02c1.55-.05,2.96-.41,4.18-1.05,1.32-.71,2.42-1.64,3.25-2.77.83-1.13,1.46-2.36,1.86-3.65l.2-.65h-3.41l-.12.33Z"/>
          <polygon points="241.95 36.36 241.95 44.42 233.04 44.42 233.04 36.36 229.66 36.36 229.66 55.85 233.04 55.85 233.04 47.66 241.95 47.66 241.95 55.85 245.32 55.85 245.32 36.36 241.95 36.36"/>
        </g>
        <g>
          <path className="fill-[#ffc000]" d="m53.81,28.47c-4.13-1.78-7.71-4.39-10.36-7.54l-6.24-7.44-2.98,7.68c-1.22,3.15-3.6,5.79-6.88,7.63l-7.48,4.2,9.13,3.93c4.13,1.78,7.71,4.39,10.36,7.54l6.24,7.44,2.98-7.68c1.22-3.15,3.6-5.79,6.88-7.64l7.48-4.2-9.13-3.93Z"/>
          <path className="fill-[#ffc000]" d="m28.13,59.17c-1.18-.86-2.27-1.82-3.23-2.86-.94-1.01-1.75-2.07-2.41-3.17-.61-1.01-.99-2.01-1.15-2.95l-1.35-8.27c-.47-2.91-1.58-5.39-3.28-7.4-1.01-1.18-2.33-2.17-3.94-2.92,1.29-.69,2.27-1.62,2.9-2.75,1.12-2.01,1.45-4.54.96-7.51l-1.35-8.27c-.15-.92-.1-1.83.17-2.77.28-.98.72-1.95,1.32-2.87.6-.92,1.34-1.77,2.21-2.52.86-.75,1.83-1.38,2.88-1.87l.36-.17-.55-2.68-5.44-.19-.28.11c-1.32.51-2.6,1.22-3.78,2.13-1.2.92-2.22,2-3.04,3.22-.82,1.23-1.43,2.58-1.8,4.01-.39,1.48-.45,3.03-.2,4.59l1.29,7.86c.19,1.17.16,2.33-.09,3.47-.21.95-.77,1.71-1.7,2.33-.98.66-2.6.95-4.82.88l-1.83-.06.92,5.62,1.23.04c2.28.08,4.1.52,5.41,1.32,1.31.8,2.28,1.76,2.88,2.85.65,1.19,1.07,2.4,1.27,3.59l1.29,7.86c.26,1.59.82,3.14,1.67,4.6.82,1.43,1.83,2.76,3,3.96,1.16,1.19,2.47,2.29,3.91,3.25,1.43.96,2.9,1.74,4.35,2.32h0s0,.08,0,.08h.22s.15.07.15.07l.04-.05,5.23.18.64-2.7-.37-.17c-1.28-.59-2.53-1.33-3.71-2.2Z"/>
          <path className="fill-[#ffc000]" d="m82.29,30.93l-1.23-.04c-2.25-.08-4.02-.52-5.29-1.31-1.27-.79-2.23-1.77-2.86-2.91-.67-1.2-1.11-2.41-1.3-3.61l-1.27-7.86c-.25-1.53-.78-3.04-1.58-4.5-.78-1.43-1.78-2.78-2.99-4.02-1.17-1.21-2.46-2.31-3.86-3.28-1.39-.96-2.87-1.75-4.38-2.34l-.16-.06-5.34-.21-.67,2.68.36.18c1.21.59,2.42,1.33,3.6,2.2,1.17.87,2.25,1.83,3.19,2.85.94,1.02,1.74,2.08,2.38,3.17.6,1.01.98,2.01,1.13,2.95l1.33,8.27c.47,2.92,1.6,5.41,3.36,7.41,1.03,1.18,2.35,2.16,3.91,2.91-1.25.69-2.22,1.6-2.88,2.72-1.19,2.01-1.54,4.54-1.06,7.53l1.34,8.27c.15.93.1,1.83-.17,2.78-.28,1-.72,1.96-1.31,2.88-.59.92-1.33,1.77-2.18,2.52-.86.76-1.8,1.39-2.79,1.89l-1.16.58.74,2.23,5.93.21.28-.1c1.38-.51,2.67-1.24,3.83-2.16,1.13-.91,2.13-1.96,2.97-3.13l.06-.08c.83-1.2,1.43-2.53,1.77-3.96.34-1.47.39-3.03.13-4.62l-1.27-7.86c-.19-1.16-.14-2.3.13-3.4.24-.95.8-1.72,1.71-2.35.92-.64,2.54-.94,4.69-.86l1.83.06-.91-5.62Z"/>
        </g>
      </g>
    </svg>
  );
};

export default Logo; 