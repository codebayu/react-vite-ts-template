import React, { SVGProps } from 'react';

function CopyOutlineIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M7 4v9a1.5 1.5 0 001.5 1.5h6A1.5 1.5 0 0016 13V6.431a1.5 1.5 0 00-.451-1.072l-2.487-2.431a1.5 1.5 0 00-1.048-.428H8.5A1.5 1.5 0 007 4v0z"
        stroke={props.color ?? '#9B9FA1'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 14.5V16a1.5 1.5 0 01-1.5 1.5h-6A1.5 1.5 0 014 16V7.75a1.5 1.5 0 011.5-1.5H7"
        stroke={props.color ?? '#9B9FA1'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CopyOutlineIcon;
