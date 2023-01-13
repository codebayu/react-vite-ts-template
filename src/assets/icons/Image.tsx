import * as React from 'react';
import { IconBaseProps } from '@Types';

function ImageIcon({ size, color, ...props }: IconBaseProps) {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        // eslint-disable-next-line
        d="M4.5 16l4.586-4.586a2 2 0 012.828 0L16.5 16m-2-2l1.586-1.586a2 2 0 012.828 0L20.5 14m-6-6h.01M6.5 20h12a2 2 0 002-2V6a2 2 0 00-2-2h-12a2 2 0 00-2 2v12a2 2 0 002 2z"
        stroke={color || '#FFF'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ImageIcon;
