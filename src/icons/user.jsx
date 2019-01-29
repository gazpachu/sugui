import React from 'react';

const UserIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M19.5 20.512c-.81-5.485-4.146-8.028-7.455-8.028S5.311 15.026 4.5 20.51" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.182 4.802a4.5 4.5 0 1 1-6.364 6.364 4.5 4.5 0 0 1 6.364-6.364" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export default UserIcon;
