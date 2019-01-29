import React from 'react';

const ClockIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" d="M18.5 12H12V5.5" />
      <path d="M18.718 5.282A9.5 9.5 0 1 1 5.283 18.717 9.5 9.5 0 0 1 18.717 5.282" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export default ClockIcon;
