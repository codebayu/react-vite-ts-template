import * as React from 'react';
import { IconBaseProps } from '@Types';

function ToastX(props: IconBaseProps) {
  return (
    <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12.5" r="12" fill="#FF2D2D" />
      <path
        d="M8.25 9.125L15.75 16.625M8.25 16.625L15.75 9.125L8.25 16.625Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ToastX;
