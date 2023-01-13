import React, { SVGProps } from 'react';

function MonitorShareIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.25 3v9c0 .832-.668 1.5-1.5 1.5h-4.5V12h4.5V3H2.25v9h4.5v1.5h-4.5A1.5 1.5 0 01.75 12V3c0-.833.667-1.5 1.5-1.5h13.5a1.5 1.5 0 011.5 1.5zm-7.5 6.75H12l-3-3-3 3h2.25V15H6v1.5h6V15H9.75V9.75z"
        fill="currentColor"
      />
    </svg>
  );
}

export default MonitorShareIcon;
