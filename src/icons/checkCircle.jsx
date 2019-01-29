import React from 'react';

const CheckCircleIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" d="M21.064 5.941L11.005 16l-4.47-4.471M21.164 9.485a9.5 9.5 0 1 1-3.016-4.729" />
    </g>
  </svg>
);

export default CheckCircleIcon;
