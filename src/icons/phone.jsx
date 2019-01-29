import React from 'react';

const PhoneIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M14.476 16.146l1.606-1.212c.424-.218.86-.27 1.125-.109.4.25 3.75 2.485 4.03 2.684.278.198.41.761.016 1.308-.395.548-2.212 2.712-2.972 2.683-.76-.029-3.923-.125-9.826-6.059C2.553 9.507 2.516 6.375 2.5 5.625c-.016-.75 2.202-2.515 2.763-2.895.56-.38 1.125-.232 1.323.039.221.308 2.403 3.646 2.643 4.029.164.26.099.694-.125 1.11-.224.414-1.166 2-1.166 2s.635 1.108 2.812 3.3c1.037 1.063 3.726 2.938 3.726 2.938z" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export default PhoneIcon;
