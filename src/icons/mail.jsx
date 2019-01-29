import React from 'react';

const MailIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M4 18.5A1.5 1.5 0 0 1 2.5 17V7A1.5 1.5 0 0 1 4 5.5h16A1.5 1.5 0 0 1 21.5 7v10a1.5 1.5 0 0 1-1.5 1.5H4z" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21.091 5.971l-7.69 7.889a2.087 2.087 0 0 1-3.008 0L2.91 5.969" stroke={props.color && props.color} strokeLinejoin="round" />
    </g>
  </svg>
);

export default MailIcon;
