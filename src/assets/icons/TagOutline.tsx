import React, { SVGProps } from 'react';

function TagOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width ?? '9'}
      height={props.height ?? '9'}
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.54167 2.95833C2.77179 2.95833 2.95833 2.77179 2.95833 2.54167C2.95833 2.31155 2.77179 2.125 2.54167 2.125C2.31155 2.125 2.125 2.31155 2.125 2.54167C2.125 2.77179 2.31155 2.95833 2.54167 2.95833Z"
        fill={props.color ?? '#FF2D2D'}
        stroke={props.color ?? '#FF2D2D'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.666748 1.91699V3.52491C0.666748 3.74866 0.755498 3.96324 0.913831 4.12158L4.2955 7.50324C4.37385 7.5816 4.46687 7.64377 4.56925 7.68618C4.67162 7.72859 4.78135 7.75042 4.89216 7.75042C5.00298 7.75042 5.11271 7.72859 5.21508 7.68618C5.31746 7.64377 5.41048 7.5816 5.48883 7.50324L7.503 5.48908C7.58136 5.41072 7.64352 5.3177 7.68593 5.21533C7.72834 5.11295 7.75017 5.00322 7.75017 4.89241C7.75017 4.7816 7.72834 4.67187 7.68593 4.56949C7.64352 4.46711 7.58136 4.37409 7.503 4.29574L4.12091 0.914075C3.96276 0.755949 3.74831 0.667079 3.52466 0.666992H1.91675C1.58523 0.666992 1.26729 0.798688 1.03286 1.03311C0.798444 1.26753 0.666748 1.58547 0.666748 1.91699V1.91699Z"
        stroke={props.color ?? '#FF2D2D'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default TagOutline;