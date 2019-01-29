import React from 'react';

const SendIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M2 2h20v20H2z" />
      <path d="M19.739 4.508L4.034 8.322c-.197.033-.328.197-.361.427a.464.464 0 0 0 .262.493l5.836 3.288 1.443 6.575a.49.49 0 0 0 .393.395h.066a.56.56 0 0 0 .426-.23l8.164-13.973a.499.499 0 0 0-.033-.559c-.098-.197-.295-.263-.491-.23z" stroke={props.color && props.color} />
      <path d="M19.917 4.917l-10 7.5" stroke={props.color && props.color} strokeLinecap="square" />
    </g>
  </svg>
);

export default SendIcon;
