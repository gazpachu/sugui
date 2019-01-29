import React from 'react';

const ShareIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M19.728 17.685a2.235 2.235 0 1 1-3.16 3.16 2.235 2.235 0 0 1 3.16-3.16M6.315 10.42a2.235 2.235 0 1 1-3.16 3.16 2.235 2.235 0 0 1 3.16-3.16M20.845 3.155a2.235 2.235 0 1 1-3.16 3.16 2.235 2.235 0 0 1 3.16-3.16M6.704 13.06l9.477 5.139M17.265 5.736L6.738 11.005" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export default ShareIcon;
