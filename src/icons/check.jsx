import React from 'react';

const CheckIcon = props => (
  <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 32 32">
    <g fill="none" fillRule="evenodd">
      <path fill="none" d="M0 0h32v32H0z" />
      <path stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" d="M25.577 8.908L12.485 22l-5.818-5.818" />
    </g>
  </svg>
);

export default CheckIcon;
