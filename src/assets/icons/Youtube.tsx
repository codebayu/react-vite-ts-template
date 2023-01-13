import React, { SVGProps } from 'react';

function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Youtube</title>
      <path
        d="M23.145 8.1c-.233-.995-.97-1.783-1.863-2.032-1.668-.497-8.266-.497-8.266-.497s-6.636 0-8.305.497c-.892.25-1.63 1.037-1.862 2.032-.466 1.741-.466 5.473-.466 5.473s0 3.69.466 5.473c.232.995.97 1.741 1.862 1.99 1.669.456 8.305.456 8.305.456s6.598 0 8.266-.456c.893-.249 1.63-.995 1.863-1.99.466-1.783.466-5.473.466-5.473s0-3.732-.466-5.473zM10.843 16.93v-6.717l5.51 3.359-5.51 3.358z"
        fill="red"
      />
    </svg>
  );
}

export default YoutubeIcon;
