import * as React from 'react';
import { IconBaseProps } from '@Types';

function NotificationImage({ color, circleColor, ...props }: IconBaseProps) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" {...props} xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill={circleColor ? circleColor : '#F0F9FF'} />
      <path
        d="M12.5 29C12.1 29 11.75 28.85 11.45 28.55C11.15 28.25 11 27.9 11 27.5V12.5C11 12.1 11.15 11.75 11.45 11.45C11.75 11.15 12.1 11 12.5 11H27.5C27.9 11 28.25 11.15 28.55 11.45C28.85 11.75 29 12.1 29 12.5V27.5C29 27.9 28.85 28.25 28.55 28.55C28.25 28.85 27.9 29 27.5 29H12.5ZM12.5 27.5H27.5V12.5H12.5V27.5ZM13.9 25.075H26.125L22.45 20.175L19.15 24.45L16.825 21.275L13.9 25.075ZM12.5 27.5V12.5V27.5Z"
        fill={color ? color : '#288CCC'}
      />
    </svg>
  );
}

export default NotificationImage;
