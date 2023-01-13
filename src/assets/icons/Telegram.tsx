import React, { SVGProps } from 'react';

function TelegramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 27 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.499 3.737a9.551 9.551 0 00-9.553 9.553 9.55 9.55 0 009.553 9.552 9.551 9.551 0 009.553-9.552 9.551 9.551 0 00-9.553-9.553zm4.66 6.548l-1.54 7.396c-.116.54-.424.655-.886.424l-2.388-1.772-1.156 1.117c-.115.115-.23.23-.462.23l.154-2.426 4.43-4.006c.192-.154-.039-.27-.308-.115l-5.47 3.466-2.35-.732c-.5-.154-.5-.539.116-.77l9.206-3.544c.424-.154.809.116.655.732z"
        fill="#08C"
      />
    </svg>
  );
}

export default TelegramIcon;
