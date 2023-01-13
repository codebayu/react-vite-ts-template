import React, { SVGProps } from 'react';

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>LinkedIn</title>
      <path
        d="M19.714 3H4.246C3.562 3 3 3.603 3 4.326v15.388C3 20.438 3.563 21 4.246 21h15.468c.683 0 1.286-.563 1.286-1.286V4.326C21 3.603 20.397 3 19.714 3zM8.424 18.429H5.772V9.87h2.652v8.558zM7.098 8.665c-.884 0-1.567-.683-1.567-1.527 0-.843.683-1.567 1.567-1.567.844 0 1.527.724 1.527 1.567 0 .844-.683 1.527-1.527 1.527zm11.33 9.764h-2.691V14.25c0-.964 0-2.25-1.367-2.25-1.406 0-1.607 1.085-1.607 2.21v4.219h-2.651V9.87h2.53v1.165h.041c.362-.683 1.246-1.407 2.531-1.407 2.692 0 3.215 1.809 3.215 4.099v4.7z"
        fill="#0077B5"
      />
    </svg>
  );
}

export default LinkedinIcon;
