import React from 'react';

const EditIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M18.782 8.72L7.25 20.317 2.5 21.5l1.189-4.75L15.274 5.165l3.514 3.552 1.93-1.93c.977-.976 1.028-2.58.052-3.553a2.538 2.538 0 0 0-3.565 0l-1.936 1.934" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export default EditIcon;
