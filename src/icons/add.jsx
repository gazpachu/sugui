import React from 'react';

const AddIcon = props => (
  <svg width="32" height="31" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 32 31">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h32v32H0z" />
      <path d="M16 27.333V4.667M4.75 16h22.583" stroke={props.color && props.color} strokeLinecap="round" />
    </g>
  </svg>
);

export default AddIcon;
