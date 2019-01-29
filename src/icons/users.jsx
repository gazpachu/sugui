import React from 'react';

const UsersIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M11.475 5.525a3.5 3.5 0 1 1-4.95 4.95 3.5 3.5 0 0 1 4.95-4.95M18.268 7.232a2.5 2.5 0 1 1-3.536 3.536 2.5 2.5 0 0 1 3.536-3.536" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.5 17.5c.61-3.721 2.793-5.992 5.5-5.992s4.889 2.273 5.5 5.992" stroke={props.color && props.color} strokeLinecap="round" />
      <path d="M20.5 15.659c-.445-2.582-2.031-4.159-4-4.159-1.43 0-2.659.831-3.394 2.275l-.014.029" stroke={props.color && props.color} strokeLinecap="round" />
    </g>
  </svg>
);

export default UsersIcon;
