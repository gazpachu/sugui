import React from 'react';

const SaveIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M2 2h20v20H2z" />
      <path d="M5.127 19.5h13.746a.628.628 0 0 0 .627-.627V6.381L17.62 4.5H5.126a.628.628 0 0 0-.627.627v13.746c0 .346.281.627.627.627zm3.28-5.833h7.668c.316 0 .574.257.574.574v4.41a.575.575 0 0 1-.574.573H8.408a.575.575 0 0 1-.575-.574v-4.41c0-.316.258-.573.575-.573z" stroke={props.color && props.color} />
      <path stroke={props.color && props.color} strokeLinecap="square" d="M8.25 4.917h7.5v4.139l-7.5.133z" />
    </g>
  </svg>
);

export default SaveIcon;
