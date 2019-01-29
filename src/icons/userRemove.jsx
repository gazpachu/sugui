import React from 'react';

const UserRemoveIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" d="M17.5 4.5h4m-8.311 1.286a4.511 4.511 0 1 1-6.379 6.38 4.511 4.511 0 0 1 6.379-6.38" />
      <path stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" d="M17.5 21.5c-.811-5.484-4.146-8.029-7.455-8.029S3.311 16.014 2.5 21.5" />
    </g>
  </svg>
);

export default UserRemoveIcon;
