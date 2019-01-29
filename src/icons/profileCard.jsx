import React from 'react';

const ProfileCardIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M4 18.5A1.5 1.5 0 0 1 2.5 17V7A1.5 1.5 0 0 1 4 5.5h16A1.5 1.5 0 0 1 21.5 7v10a1.5 1.5 0 0 1-1.5 1.5H4z" stroke={props.color && props.color} />
      <path d="M4 18.5A1.5 1.5 0 0 1 2.5 17V7A1.5 1.5 0 0 1 4 5.5h16A1.5 1.5 0 0 1 21.5 7v10a1.5 1.5 0 0 1-1.5 1.5H4zM12.479 9.5h7M12.479 11.5h7M12.479 13.5h7" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.646 8.806a2.827 2.827 0 0 1 0 3.893 2.583 2.583 0 0 1-3.75 0 2.827 2.827 0 0 1 0-3.893 2.583 2.583 0 0 1 3.75 0" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 18.5c-.59-3.141-2.275-5-4.223-5-1.947 0-3.652 1.829-4.262 4.92" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export default ProfileCardIcon;
