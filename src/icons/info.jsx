import React from 'react';

const InfoIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" d="M12 16.313V10.5h-1M11 16.5h2" />
      <path d="M18.718 5.282A9.5 9.5 0 1 1 5.283 18.717 9.5 9.5 0 0 1 18.717 5.282" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.927 7.448a.25.25 0 1 1-.354.354.25.25 0 0 1 .354-.354" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.838 7.537a.125.125 0 1 1-.176.176.125.125 0 0 1 .176-.176" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
      <circle fill={props.color && props.color} cx="11.75" cy="7.63" r="1" />
    </g>
  </svg>
);

export default InfoIcon;
