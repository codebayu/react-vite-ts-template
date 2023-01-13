import * as React from 'react';
import { IconBaseProps } from '@Types';

function MessageBubble({ size, color, ...props }: IconBaseProps) {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 19C14.9707 19 19 14.9707 19 9.99999C19 5.0293 14.9707 1 10 1C5.0293 1 1 5.0293 1 9.99999C1 11.6389 1.4383 13.177 2.2042 14.5L1.45 18.55L5.5 17.7958C6.86759 18.5869 8.42006 19.0024 10 19V19Z"
        stroke={color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default MessageBubble;
