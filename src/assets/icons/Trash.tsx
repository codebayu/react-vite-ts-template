import * as React from 'react';
import { IconBaseProps } from '@Types';

function SvgTrash({ size, color, ...props }: IconBaseProps) {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.667 4.667h10.666m-.666 0l-.578 8.094A1.334 1.334 0 0110.759 14H5.24a1.334 1.334 0 01-1.33-1.239l-.578-8.094h9.334zm-6 2.666v4-4zm2.666 0v4-4zM10 4.667v-2A.667.667 0 009.333 2H6.667A.667.667 0 006 2.667v2h4z"
        stroke={color || 'currentColor'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgTrash;
