import * as React from 'react';
import { IconBaseProps } from '@Types';

function MyNetwork({ size, color, ...props }: IconBaseProps) {
  return (
    <svg
      width={size || '24px'}
      height={size || '24px'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 3v4-4zM3 5h4-4zm3 12v4-4zm-2 2h4-4zm9-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        stroke={color || 'currentColor'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default MyNetwork;
