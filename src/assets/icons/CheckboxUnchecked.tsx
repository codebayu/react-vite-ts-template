import React, { SVGProps } from 'react';

const CheckboxUnchecked = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.334 0.75H5.665C2.644 0.75 0.75 2.889 0.75 5.916V14.084C0.75 17.111 2.635 19.25 5.665 19.25H14.333C17.364 19.25 19.25 17.111 19.25 14.084V5.916C19.25 2.889 17.364 0.75 14.334 0.75Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="#FFFFFF"
    />
  </svg>
);

export default CheckboxUnchecked;
