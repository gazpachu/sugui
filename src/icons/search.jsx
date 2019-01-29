import React from 'react';

const SearchIcon = props => (
  <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 20 20">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h20v20H0z" />
      <path d="M12.041 3.792a5.833 5.833 0 1 1-8.25 8.25 5.833 5.833 0 0 1 8.25-8.25M12.04 12.04l5.877 5.877" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export default SearchIcon;
