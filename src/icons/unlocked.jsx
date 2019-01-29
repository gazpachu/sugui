import React from 'react';

const UploadIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M12 12.5v6M6 21.5A1.5 1.5 0 0 1 4.5 20v-9A1.5 1.5 0 0 1 6 9.5h12a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5H6zM1.5 8.5V6a3.5 3.5 0 1 1 7 0v3.5" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export default UploadIcon;
