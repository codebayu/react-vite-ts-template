import React, { SVGProps } from 'react';

const CheckboxIndetemininate = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 0C2.23858 0 0 2.23858 0 5V15C0 17.7614 2.23858 20 5 20H15C17.7614 20 20 17.7614 20 15V5C20 2.23858 17.7614 0 15 0H5ZM6 9C5.44772 9 5 9.44771 5 10C5 10.5523 5.44772 11 6 11H14C14.5523 11 15 10.5523 15 10C15 9.44771 14.5523 9 14 9H6Z"
      fill="#3EBA13"
    />
  </svg>
);

export default CheckboxIndetemininate;
