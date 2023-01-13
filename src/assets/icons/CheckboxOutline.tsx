import React, { SVGProps } from 'react';

const CheckboxOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width ?? '8'}
    height={props.height ?? '8'}
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.50008 0.666992H1.50008C1.03984 0.666992 0.666748 1.04009 0.666748 1.50033V6.50033C0.666748 6.96056 1.03984 7.33366 1.50008 7.33366H6.50008C6.96032 7.33366 7.33342 6.96056 7.33342 6.50033V1.50033C7.33342 1.04009 6.96032 0.666992 6.50008 0.666992Z"
      stroke={props.color ?? '#FF2D2D'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.75 4.00033L3.58333 4.83366L5.25 3.16699"
      stroke={props.color ?? '#FF2D2D'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CheckboxOutline;
