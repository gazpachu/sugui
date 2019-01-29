import React from 'react';

const SettingsIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M9 15.5H4.008A1.507 1.507 0 0 1 2.5 13.992v-3.985c0-.832.675-1.507 1.508-1.507h5l6.5-6v19l-6.5-6H9zM19.828 8a5.662 5.662 0 0 1 0 8.008M18.5 9.582a3.439 3.439 0 0 1 0 4.864" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export default SettingsIcon;
