import React, { SVGProps } from 'react';

const ColoredInstagram = (props: SVGProps<SVGSVGElement>) => {
  const uniquePointerId = new Date(Date.now()).getTime();
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" {...props}>
      <title>Instagram</title>
      <path
        // eslint-disable-next-line
        d="M12.0201 7.35938C9.44866 7.35938 7.39955 9.44866 7.39955 11.9799C7.39955 14.5513 9.44866 16.6004 12.0201 16.6004C14.5513 16.6004 16.6406 14.5513 16.6406 11.9799C16.6406 9.44866 14.5513 7.35938 12.0201 7.35938ZM12.0201 14.9933C10.3728 14.9933 9.0067 13.6674 9.0067 11.9799C9.0067 10.3326 10.3326 9.0067 12.0201 9.0067C13.6674 9.0067 14.9933 10.3326 14.9933 11.9799C14.9933 13.6674 13.6674 14.9933 12.0201 14.9933ZM17.8862 7.19866C17.8862 6.59598 17.404 6.11384 16.8013 6.11384C16.1987 6.11384 15.7165 6.59598 15.7165 7.19866C15.7165 7.80134 16.1987 8.28348 16.8013 8.28348C17.404 8.28348 17.8862 7.80134 17.8862 7.19866ZM20.9397 8.28348C20.8594 6.83705 20.5379 5.55134 19.4933 4.5067C18.4487 3.46205 17.1629 3.14062 15.7165 3.06027C14.2299 2.97991 9.77009 2.97991 8.28348 3.06027C6.83705 3.14062 5.59152 3.46205 4.5067 4.5067C3.46205 5.55134 3.14062 6.83705 3.06027 8.28348C2.97991 9.77009 2.97991 14.2299 3.06027 15.7165C3.14062 17.1629 3.46205 18.4085 4.5067 19.4933C5.59152 20.5379 6.83705 20.8594 8.28348 20.9397C9.77009 21.0201 14.2299 21.0201 15.7165 20.9397C17.1629 20.8594 18.4487 20.5379 19.4933 19.4933C20.5379 18.4085 20.8594 17.1629 20.9397 15.7165C21.0201 14.2299 21.0201 9.77009 20.9397 8.28348ZM19.0112 17.2835C18.7299 18.0871 18.0871 18.6897 17.3237 19.0112C16.1183 19.4933 13.3058 19.3728 12.0201 19.3728C10.6942 19.3728 7.8817 19.4933 6.71652 19.0112C5.91295 18.6897 5.31027 18.0871 4.98884 17.2835C4.5067 16.1183 4.62723 13.3058 4.62723 11.9799C4.62723 10.6942 4.5067 7.8817 4.98884 6.67634C5.31027 5.91295 5.91295 5.31027 6.71652 4.98884C7.8817 4.5067 10.6942 4.62723 12.0201 4.62723C13.3058 4.62723 16.1183 4.5067 17.3237 4.98884C18.0871 5.27009 18.6897 5.91295 19.0112 6.67634C19.4933 7.8817 19.3728 10.6942 19.3728 11.9799C19.3728 13.3058 19.4933 16.1183 19.0112 17.2835Z"
        fill={`url(#paint0_linear_${uniquePointerId})`}
      />
      <defs>
        <linearGradient
          id={`paint0_linear_${uniquePointerId}`}
          x1="25.875"
          y1="-3.75"
          x2="1.125"
          y2="30.375"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#515BD4" />
          <stop offset="0.25" stopColor="#8134AF" />
          <stop offset="0.515625" stopColor="#DD2A7B" />
          <stop offset="0.777024" stopColor="#FEDA77" />
          <stop offset="1" stopColor="#F58529" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ColoredInstagram;
