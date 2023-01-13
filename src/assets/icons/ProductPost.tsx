import React, { SVGProps } from 'react';

const ProductPost = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="11.5" fill="#FFE8C6" stroke="#FF9900" />
      <path
        d="M14.6665 10.3333V7.66667C14.6665 6.95942 14.3856 6.28115 13.8855 5.78105C13.3854 5.28095 12.7071 5 11.9998 5C11.2926 5 10.6143 5.28095 10.1142 5.78105C9.61412 6.28115 9.33317 6.95942 9.33317 7.66667V10.3333M7.33317 9H16.6665L17.3332 17H6.6665L7.33317 9Z"
        stroke="#FF9900"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ProductPost;
