import React, { SVGProps } from 'react';

function RoundedShippingBag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="30" cy="30" r="30" fill="#288CCC" fillOpacity="0.14" />
      <path
        d="M38.4004 27.6031H39.6004V40.8031H20.4004V27.6031H21.6004V25.2031C21.6004 21.8911 24.2884 19.2031 27.6004 19.2031C28.4524 19.2031 29.2684 19.3831 30.0004 19.7071C30.7565 19.3737 31.574 19.202 32.4004 19.2031C35.7124 19.2031 38.4004 21.8911 38.4004 25.2031V27.6031ZM24.0004 25.2031V27.6031H26.4004V25.2031C26.4004 23.8471 26.8684 22.6111 27.6244 21.6031H27.6004C25.6204 21.6031 24.0004 23.2231 24.0004 25.2031ZM36.0004 27.6031V25.2031C36.0004 23.2231 34.3804 21.6031 32.4004 21.6031H32.3764C33.1655 22.6379 33.5952 23.9019 33.6004 25.2031V27.6031H36.0004ZM30.0004 22.5391C29.2684 23.1991 28.8004 24.1471 28.8004 25.2031V27.6031H31.2004V25.2031C31.2004 24.1471 30.7324 23.1991 30.0004 22.5391Z"
        fill="#288CCC"
      />
    </svg>
  );
}

export default RoundedShippingBag;