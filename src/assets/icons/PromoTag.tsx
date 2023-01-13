import React, { SVGProps } from 'react';

function PromoTagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="62" height="66" viewBox="0 0 62 66" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8 4H12V13H3L8 4Z" fill={props.color ?? '#288209'} />
      <g filter="url(#filter0_d_8250_142598)">
        <path
          d="M8 4H50C52.2091 4 54 5.79086 54 8V38.9806C54 40.4392 53.2061 41.7821 51.9282 42.4852L32.9282 52.9391C31.7276 53.5997 30.2724 53.5997 29.0718 52.9391L10.0718 42.4852C8.79389 41.7821 8 40.4392 8 38.9806V4Z"
          fill="white"
        />
        <path
          d="M8.5 4.5H50C51.933 4.5 53.5 6.067 53.5 8V38.9806C53.5 40.2569 52.8053 41.4319 51.6872 42.0471L32.6872 52.501C31.6367 53.079 30.3633 53.079 29.3128 52.501L10.3128 42.0471C9.19465 41.4319 8.5 40.2569 8.5 38.9806V4.5Z"
          stroke={props.color ?? '#3EBA13'}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_8250_142598"
          x="0"
          y="0"
          width="62"
          height="65.4346"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8250_142598" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8250_142598" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default PromoTagIcon;
