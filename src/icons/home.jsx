import React from 'react';

const HomeIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M19.5 11.5h2l-2-2.015V3.5h-3v3l-3.383-3.581c-.535-.57-1.722-.548-2.235 0L2.5 11.5h2v9a1 1 0 0 0 1 1h5v-6h3v6h4.765c.552 0 1.235-.572 1.235-1.125V11.5M10.324 21.5h3.352" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export default HomeIcon;
