import React from 'react';

const DocumentIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M15.5 10.5h-7M15.5 13.5h-7M15.5 16.5h-7" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.5 6.5l-4-4H7A1.5 1.5 0 0 0 5.5 4v16A1.5 1.5 0 0 0 7 21.5h10a1.5 1.5 0 0 0 1.5-1.5V6.5z" stroke={props.color && props.color} strokeLinejoin="round" />
      <path stroke={props.color && props.color} strokeLinejoin="round" d="M14.5 2.529V6.5h4" />
    </g>
  </svg>
);

export default DocumentIcon;
