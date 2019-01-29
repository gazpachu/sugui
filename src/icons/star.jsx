import React from 'react';

const StarIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" d="M12 17.03L5.853 21.5l2.278-7.265L2.5 9.5h7.085L12 2.5l2.29 7h7.21l-5.758 4.735 2.405 7.265z" />
    </g>
  </svg>
);

export default StarIcon;
