import * as React from 'react';
import { IconBaseProps } from '@Types';

function DangerIcon(props: IconBaseProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 7.5v1.666V7.5zm0 5h.008H10zm-5.773 3.333h11.546a1.666 1.666 0 001.444-2.5l-5.773-10a1.667 1.667 0 00-2.887 0l-5.773 10c-.642 1.111.16 2.5 1.443 2.5z"
        stroke="#FF3F3F"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default DangerIcon;
