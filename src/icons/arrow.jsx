import React from 'react';

const ArrowIcon = props => (
  <svg width="13" height="13" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 13 13">
    <g fill="none" fillRule="evenodd">
      <path fill="none" d="M13 0v13H0V0z" />
      <path stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" d="M5.958 1.896L1.354 6.5l4.604 4.604M1.354 6.5h10.292" />
    </g>
  </svg>
);

export default ArrowIcon;
