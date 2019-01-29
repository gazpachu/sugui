import React from 'react';

const FilterIcon = props => (
  <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 20 20">
    <path fill={props.color && props.color} d="M11 8.5a.5.5 0 0 1 .146-.354L18.292 1H1.708l7.146 7.146A.5.5 0 0 1 9 8.5v9.792l2-2V8.5zm1 .207v7.792a.5.5 0 0 1-.147.354l-3 3A.5.5 0 0 1 8 19.499V8.707L.147.854A.5.5 0 0 1 .501 0h18.998a.5.5 0 0 1 .354.854L12 8.707z" fillRule="nonzero" />
  </svg>

);

export default FilterIcon;
