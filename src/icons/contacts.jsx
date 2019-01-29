import React from 'react';

const ContactsIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M5 21.5A1.5 1.5 0 0 1 3.5 20V5A1.5 1.5 0 0 1 5 3.5h14A1.5 1.5 0 0 1 20.5 5v15a1.5 1.5 0 0 1-1.5 1.5H5z" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.341 8.659a2.25 2.25 0 1 1-3.182 3.182 2.25 2.25 0 0 1 3.182-3.182" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.5 17c-.404-2.736-2.076-4.5-3.727-4.5C9.12 12.5 7.405 14.264 7 17M17.5 21.5v-18M17.5 7.5h3M17.5 12.5h3M17.5 17.5h3" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export default ContactsIcon;
