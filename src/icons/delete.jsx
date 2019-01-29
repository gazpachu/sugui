import React from 'react';

const DeleteIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M15 18V9M12 18V9M9 18V9M4.5 5.5h15" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 5.5v-1a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1M18.5 5.5V20a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 20V5.5" stroke={props.color && props.color} strokeLinejoin="round" />
    </g>
  </svg>
);

export default DeleteIcon;
