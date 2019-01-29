import React from 'react';

const PhotoCameraIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M15.182 9.863a4.5 4.5 0 1 1-6.364 6.364 4.5 4.5 0 0 1 6.364-6.364" stroke={props.color && props.color} strokeLinecap="round" />
      <path d="M2.5 9.5a2 2 0 0 1 1.957-2H6.41c.43.001.84-.187 1.118-.515L9.605 4a1.802 1.802 0 0 1 1.278-.5h2.235c.442 0 .958.154 1.272.465L16.47 7a1.78 1.78 0 0 0 1.219.5H19.6c1.045 0 1.899.914 1.899 1.957v9.144a1.904 1.904 0 0 1-1.899 1.899H4.4a1.905 1.905 0 0 1-1.9-1.9V9.5z" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export default PhotoCameraIcon;
