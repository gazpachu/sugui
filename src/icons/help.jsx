import React from 'react';

const HelpIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M9.485 8.786S9.826 6.96 12 6.97c2.174.01 2.909 2.678 1.762 3.844-.512.524-.95.955-1.262 1.257-.32.316-.5.747-.5 1.197v.966" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.718 5.282A9.5 9.5 0 1 1 5.283 18.717 9.5 9.5 0 0 1 18.717 5.282" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.177 16.823a.25.25 0 1 1-.354.354.25.25 0 0 1 .354-.354" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.088 16.912a.125.125 0 1 1-.176.176.125.125 0 0 1 .176-.176" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export default HelpIcon;
