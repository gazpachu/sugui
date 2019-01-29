import React from 'react';

const CloseIcon = props => (
  <svg width="32" height="31" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 31" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h32v32H0z" fill="none" stroke="none" />
      <path d="M26.667 5.333L5.333 26.667M5.333 5.333l21.334 21.334" stroke={props.color && props.color} strokeLinecap="round" />
    </g>
  </svg>
);

export default CloseIcon;
