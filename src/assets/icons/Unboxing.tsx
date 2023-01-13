import React, { SVGProps } from 'react';

const Unboxing = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="11.5" fill="#E3FFD9" stroke="#3EBA13" />
      <path
        d="M17.3335 6H6.66683C5.9315 6 5.3335 6.598 5.3335 7.33333V16.6667C5.3335 17.402 5.9315 18 6.66683 18H17.3335C18.0688 18 18.6668 17.402 18.6668 16.6667V7.33333C18.6668 6.598 18.0688 6 17.3335 6ZM17.3342 10C17.3335 10 17.3335 10 17.3342 10H17.0242L15.2462 7.33333H17.3335L17.3342 10ZM10.3575 10L8.5795 7.33333H10.3102L12.0882 10H10.3575ZM13.6908 10L11.9128 7.33333H13.6435L15.4215 10H13.6908V10ZM6.66683 7.33333H6.97683L8.75483 10H6.66683V7.33333ZM6.66683 16.6667V11.3333H17.3335L17.3348 16.6667H6.66683Z"
        fill="#3EBA13"
      />
      <path d="M10.6665 16L14.3332 14L10.6665 12V16Z" fill="#3EBA13" />
    </svg>
  );
};

export default Unboxing;