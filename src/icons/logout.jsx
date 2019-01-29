import React from 'react';

const LogoutIcon = props => (
  <svg width="17" height="20" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 17 20">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M19 22H-5V-2h24z" />
      <path stroke={props.color && props.color} d="M16.474 9.995l-9.5.005M13.12 13.354L16.474 10 13.12 6.648" strokeLinecap="round" strokeLinejoin="round" />
      <path stroke={props.color && props.color} d="M13.5 4.375V2A1.5 1.5 0 0 0 12 .5H2A1.5 1.5 0 0 0 .5 2v16A1.5 1.5 0 0 0 2 19.5h10a1.5 1.5 0 0 0 1.5-1.5v-2.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export default LogoutIcon;
