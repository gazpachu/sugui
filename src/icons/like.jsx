import React from 'react';

const LikeIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M5.401 21.5h12.797c1.44 0 2.625-1.117 1.983-2.681 1.469-1.694.694-2.975.694-2.975s1.389-1.508.04-2.975c.349-.982.55-1.849-.73-2.716-1.28-.868-4.322-.028-5.435.113-1.485-.475 2.948-7.641-1.77-7.766-.02.051-.55-.125-.4 1.735 0 1.941-3.665 6.265-4.864 7.947" stroke={props.color && props.color} strokeLinejoin="round" />
      <path d="M8.5 21.5H5A2.5 2.5 0 0 1 2.5 19v-5A2.5 2.5 0 0 1 5 11.5h1A2.5 2.5 0 0 1 8.5 14v7.5z" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export default LikeIcon;
