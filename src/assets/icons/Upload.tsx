import * as React from 'react';
import { IconBaseProps } from '@Types';

function SvgUpload({ size, color, ...props }: IconBaseProps) {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
        stroke={color || 'currentColor'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgUpload;
