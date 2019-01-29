import React from 'react';

const NotificationIcon = props => (
  <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 32 32">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M32 0v32H0V0" />
      <circle stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" cx="16" cy="27.833" r="1" />
      <circle stroke={props.color && props.color} fill={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" cx="16" cy="27.833" r="1" />
      <path d="M16 6c-2.667 0-3.865 1.285-4 1.407-.87.785-1.25 1.716-1.407 2.898l-.03.968-.063 1.934a17.5 17.5 0 0 1-1.687 6.871c-.101.202-.183.429-.293.624-.07.128-.142.271-.215.396-.214.365-.474.7-.772 1-.931.937-1.366 1.439-1.7 2.685l-.135.445a.628.628 0 0 0 .635.787h19.269a.628.628 0 0 0 .635-.787l-.135-.445c-.334-1.246-.775-1.748-1.71-2.688a5.037 5.037 0 0 1-.772-1c-.073-.125-.145-.268-.215-.397-.11-.196-.19-.421-.292-.625a17.527 17.527 0 0 1-1.686-6.87l-.06-1.936-.034-.954c-.155-1.185-.298-2.12-1.166-2.906C20.032 7.285 18.667 6 16 6zM17.983 6v-.667a1.972 1.972 0 0 0-1.983-2 2 2 0 0 0-2 2V6" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export default NotificationIcon;
