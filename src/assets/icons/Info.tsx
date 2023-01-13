import * as React from 'react';
import { IconBaseProps } from '@Types';

function InfoIcon(props: IconBaseProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.833 13.333H10V10h-.833M10 6.667h.008M17.5 10a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
        stroke="#288CCC"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default InfoIcon;
