import React from 'react';

const SyncIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" d="M5.5 21.261V16.5h4.727M18.5 2.75V7.5h-4.727M3.96 13.386A8.125 8.125 0 0 1 18.5 7.33M20.04 10.625A8.125 8.125 0 0 1 5.5 16.683" />
    </g>
  </svg>
);

export default SyncIcon;
