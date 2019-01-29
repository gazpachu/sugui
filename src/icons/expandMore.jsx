import React from 'react';

const ExpandMoreIcon = props => (
  <svg width="32" height="31" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 32 31">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h32v30.974H0z" />
      <path stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" d="M27.333 10.97L16 21.94 4.667 10.97" />
    </g>
  </svg>
);

export default ExpandMoreIcon;
