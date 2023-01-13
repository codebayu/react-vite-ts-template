import * as React from 'react';
import { IconBaseProps } from '@Types';

function Menu({ size, color, ...props }: IconBaseProps) {
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
        d="M4 18h16M4 6h16H4zm0 6h16H4z"
        stroke={color || 'currentColor'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Menu;
