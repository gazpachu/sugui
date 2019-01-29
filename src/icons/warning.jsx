import React from 'react';

const WarningIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M21.054 17.035c1.045 1.849.196 3.465-1.9 3.465H4.846c-2.09 0-2.946-1.616-1.9-3.465L10.1 3.894c1.041-1.793 2.75-1.888 3.801 0l7.153 13.141zM12 7.5v7.063" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.177 16.823a.25.25 0 1 1-.354.354.25.25 0 0 1 .354-.354" stroke={props.color && props.color} fill={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export default WarningIcon;
