import React from 'react';

const MuteIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M12 2.5A2.5 2.5 0 0 1 14.5 5v5.5a2.5 2.5 0 1 1-5 0V5A2.5 2.5 0 0 1 12 2.5z" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 10.5a5.016 5.016 0 0 0 5 5 5.016 5.016 0 0 0 5-5M8.5 21.5h7" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 15.5v6" stroke={props.color && props.color} strokeLinejoin="round" />
      <path d="M4.431 19.569L19.57 4.43" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export default MuteIcon;
