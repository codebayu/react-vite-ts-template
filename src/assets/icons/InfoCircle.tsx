import React, { SVGProps } from 'react';

function InfoCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16px"
      height="16px"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.33301 8.00065H7.99967V10.6673H8.66634M7.99967 5.33398H8.00634H7.99967Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default InfoCircle;
