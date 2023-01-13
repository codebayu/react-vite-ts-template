import * as React from 'react';
import { IconBaseProps } from '@Types';

function FollowLimitIcon(props: IconBaseProps) {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="64" height="64" rx="32" fill="url(#paint0_linear_9939_130383)" />
      <path
        d="M42.9595 40.3496L43.6667 41.0572L44.374 40.3496L47.2019 37.5204L48.1457 38.4642L45.3165 41.2921L44.6089 41.9993L45.3165 42.7066L48.1457 45.5345L47.2019 46.4783L44.374 43.6491L43.6667 42.9415L42.9595 43.6491L40.1316 46.4783L39.1878 45.5345L42.017 42.7066L42.7246 41.9993L42.017 41.2921L39.1878 38.4642L40.1316 37.5204L42.9595 40.3496ZM19.7071 47.666C19.8317 46.1287 20.2439 44.6253 20.9252 43.2351C21.7537 41.5446 22.9581 40.0662 24.4462 38.9132C25.9344 37.7602 27.6667 36.9632 29.5105 36.5832C31.1029 36.255 32.7419 36.2454 34.3334 36.552V47.666H19.7071ZM32.0001 32.666C27.0274 32.666 23.0001 28.6387 23.0001 23.666C23.0001 18.6933 27.0274 14.666 32.0001 14.666C36.9728 14.666 41.0001 18.6933 41.0001 23.666C41.0001 28.6387 36.9728 32.666 32.0001 32.666Z"
        fill="#FFD391"
        stroke="#895507"
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_9939_130383"
          x1="32"
          y1="0"
          x2="32"
          y2="64"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF9900" />
          <stop offset="1" stopColor="#FF9900" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default FollowLimitIcon;
