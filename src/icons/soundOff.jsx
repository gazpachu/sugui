import React from 'react';

const SettingsIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M10.992 15.5H5.007A1.508 1.508 0 0 1 3.5 13.992v-3.985c0-.832.675-1.507 1.507-1.507H11l6.5-6v19l-6.5-6h-.008z" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export default SettingsIcon;
