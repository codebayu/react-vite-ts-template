import React, { SVGProps } from 'react';

function TwitchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.5 7.5H15V12h1.5V7.5zM11.25 7.5h1.5V12h-1.5V7.5z"
        fill="#6445A2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.75 6l1.176-3H21v11.25l-4.5 4.5h-3.75L10.415 21H7.5v-2.25H3.75V6zm12.75 9.75l3-3V4.5H6.75v11.25h3V18L12 15.75h4.5z"
        fill="#6445A2"
      />
    </svg>
  );
}

export default TwitchIcon;
