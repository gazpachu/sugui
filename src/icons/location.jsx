import React from 'react';

const LocationIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M14.475 7.525a3.5 3.5 0 1 1-4.95 4.95 3.5 3.5 0 0 1 4.95-4.95" stroke={props.color && props.color} strokeLinecap="round" />
      <path d="M19.5 10c0 5-7.5 11.5-7.5 11.5S4.5 15 4.5 10a7.5 7.5 0 1 1 15 0z" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export default LocationIcon;
