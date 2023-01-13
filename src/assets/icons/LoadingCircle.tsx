import * as React from 'react';
import { IconBaseProps } from '@Types';

function LoadingCircleIcon(props: IconBaseProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.582 2.186a6 6 0 101.8 2.163"
        stroke="url(#loading-circle_svg__paint0_linear)"
        strokeLinecap="round"
      />
      <path
        d="M12.175 3.964a5.999 5.999 0 10-8.04 8.308"
        stroke="#9B9FA1"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="loading-circle_svg__paint0_linear"
          x1={6.625}
          y1={11.125}
          x2={12.25}
          y2={4.75}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9B9FA1" />
          <stop offset={1} stopColor="#9B9FA1" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default LoadingCircleIcon;
