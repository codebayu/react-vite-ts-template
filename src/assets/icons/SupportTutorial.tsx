import * as React from 'react';
import { IconBaseProps } from '@Types';

function SupportTutorial({ size, color, ...props }: IconBaseProps) {
  return (
    <svg
      width={size || '24'}
      height={size || '24'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 10H21M7 15H8M12 15H13M6 19H18C18.7956 19 19.5587 18.6839 20.1213 18.1213C20.6839 17.5587 21 16.7956 21 16V8C21 7.20435 20.6839 6.44129 20.1213 5.87868C19.5587 5.31607 18.7956 5 18 5H6C5.20435 5 4.44129 5.31607 3.87868 5.87868C3.31607 6.44129 3 7.20435 3 8V16C3 16.7956 3.31607 17.5587 3.87868 18.1213C4.44129 18.6839 5.20435 19 6 19Z"
        stroke={color || '#288CCC'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SupportTutorial;
