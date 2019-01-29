import React from 'react';

const SettingsIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M16.931 17.625l2.139 1.24 2.383-4.025-2.39-1.386c.189-.909.198-1.846.026-2.758L21.5 9.33 19.156 5.28l-2.392 1.357a7.25 7.25 0 0 0-2.415-1.398V2.5H9.635v2.731A7.241 7.241 0 0 0 7.239 6.6L4.887 5.235 2.5 9.26l2.375 1.375a7.084 7.084 0 0 0 0 2.74L2.5 14.725l2.344 4.048 2.406-1.358a7.243 7.243 0 0 0 2.39 1.361V21.5h4.714v-2.732a5.084 5.084 0 0 0 2.577-1.143z" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.492 11.773a3.5 3.5 0 1 1-3.265-3.265 3.5 3.5 0 0 1 3.265 3.265z" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export default SettingsIcon;
