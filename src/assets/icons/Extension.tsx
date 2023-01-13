import * as React from 'react';
import { IconBaseProps } from '@Types';

function ExtensionIcon(props: IconBaseProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 3v2-2zm6 0v2-2zM9 19v2-2zm6 0v2-2zM5 9H3h2zm0 6H3h2zm16-6h-2 2zm0 6h-2 2zM7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ExtensionIcon;
