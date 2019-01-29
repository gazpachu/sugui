import React from 'react';

const DownloadIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M21.5 16.5V19a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 19v-2.5M12 6.5v12" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
      <path stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" d="M15.25 15L12 18.5 8.75 15" />
    </g>
  </svg>
);

export default DownloadIcon;
