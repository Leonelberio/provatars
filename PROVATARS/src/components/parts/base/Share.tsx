import * as React from 'react';

const Share = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8.684 13.342C8.886 13.524 9 13.788 9 14.069V18c0 1 .6 3 3 3s3-2 3-3v-3.931c0-.281.114-.545.316-.727l6.684-6.684a2 2 0 00-2.828-2.828L12 10.003 4.828 2.831a2 2 0 00-2.828 2.828l6.684 6.683z"
    />
  </svg>
);

export default Share;