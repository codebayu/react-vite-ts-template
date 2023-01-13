import * as React from 'react';
import { IconBaseProps } from '@Types';

function NotificationVideo({ color, circleColor, ...props }: IconBaseProps) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" {...props} xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill={circleColor ? circleColor : '#F0F9FF'} />
      <path
        d="M11.5 28C11.1 28 10.75 27.85 10.45 27.55C10.15 27.25 10 26.9 10 26.5V13.5C10 13.1 10.15 12.75 10.45 12.45C10.75 12.15 11.1 12 11.5 12H24.5C24.9 12 25.25 12.15 25.55 12.45C25.85 12.75 26 13.1 26 13.5V18.875L30 14.875V25.125L26 21.125V26.5C26 26.9 25.85 27.25 25.55 27.55C25.25 27.85 24.9 28 24.5 28H11.5ZM11.5 26.5H24.5V13.5H11.5V26.5ZM11.5 26.5V13.5V26.5Z"
        fill={color ? color : '#288CCC'}
      />
    </svg>
  );
}

export default NotificationVideo;
