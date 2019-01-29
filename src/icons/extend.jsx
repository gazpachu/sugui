import React from 'react';

const ExtendIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M3.504 20.51l7.082-7.083M7.511 20.51H3.504v-4.019M20.5 3.498L13.398 10.6M16.494 3.498H20.5v4.006" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export default ExtendIcon;
