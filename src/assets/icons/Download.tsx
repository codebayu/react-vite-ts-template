import * as React from 'react';
import { IconBaseProps } from '@Types';

function SvgDownload({ size, color, ...props }: IconBaseProps) {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.4 13.6a.8.8 0 01.8-.8h9.6a.8.8 0 110 1.6H3.2a.8.8 0 01-.8-.8zm2.634-6.165a.8.8 0 011.132 0L7.2 8.469V2.4a.8.8 0 011.6 0V8.47l1.034-1.034a.8.8 0 111.132 1.13l-2.4 2.4a.8.8 0 01-1.132 0l-2.4-2.4a.8.8 0 010-1.13z"
        fill={color || 'currentColor'}
      />
    </svg>
  );
}

export default SvgDownload;
