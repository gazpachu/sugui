import React from 'react';

const MoreVertIcon = props => (
  <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 32 32">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h32v32H0z" />
      <path d="M17.414 23.919a2 2 0 1 1-2.828 2.828 2 2 0 0 1 2.828-2.828M17.414 14.586a2 2 0 1 1-2.828 2.828 2 2 0 0 1 2.828-2.828M17.414 5.252a2 2 0 1 1-2.828 2.829 2 2 0 0 1 2.828-2.829" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export default MoreVertIcon;
