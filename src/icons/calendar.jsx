import React from 'react';

const CalendarIcon = props => (
  <svg width="25" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 25 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M.17 0h24v24h-24z" />
      <path d="M8.67 2.5v3M15.67 2.5v3M5.17 21.5a1.5 1.5 0 0 1-1.5-1.5V6a1.5 1.5 0 0 1 1.5-1.5h14a1.5 1.5 0 0 1 1.5 1.5v14a1.5 1.5 0 0 1-1.5 1.5h-14z" stroke={props.color && props.color} strokeLinecap="round" />
      <path d="M20.67 8.5h-17" stroke={props.color && props.color} />
      <path d="M8.67 14.5h-3M13.67 14.5h-3M18.67 14.5h-3M8.67 11.5h-3M13.67 11.5h-3M18.67 11.5h-3M8.67 17.5h-3M13.67 17.5h-3M18.67 17.5h-3" stroke={props.color && props.color} strokeLinecap="round" />
    </g>
  </svg>
);

export default CalendarIcon;
