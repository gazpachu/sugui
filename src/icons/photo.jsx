import React from 'react';

const PhotoIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" d="M2.5 17.03l5.029-8.383 6.147 6.147 2.235-2.235 5.589 5.587" />
      <path d="M18.105 5.895a1.563 1.563 0 1 1-2.21 2.21 1.563 1.563 0 0 1 2.21-2.21" stroke={props.color && props.color} strokeLinecap="round" />
      <path d="M5 21.5A2.5 2.5 0 0 1 2.5 19V5A2.5 2.5 0 0 1 5 2.5h14A2.5 2.5 0 0 1 21.5 5v14a2.5 2.5 0 0 1-2.5 2.5H5z" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export default PhotoIcon;
