import React from 'react';

const UploadIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <g strokeLinecap="round" strokeLinejoin="round" stroke={props.color && props.color}>
        <path d="M21.5 16.5V19a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 19v-2.5M12 18.5v-12M15.25 10L12 6.5 8.75 10" />
      </g>
    </g>
  </svg>
);

export default UploadIcon;
