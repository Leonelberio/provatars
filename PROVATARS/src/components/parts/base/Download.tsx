import * as React from 'react';

const Download = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={306}
    height={306}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 7v10m0 0l4-4m-4 4l-4-4m11 4v3a2 2 0 01-2 2H7a2 2 0 01-2-2v-3"
    />
  </svg>
);

export default Download; 