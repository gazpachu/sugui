import React from 'react';

const OrganigramIcon = props => (
  <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 22 20">
    <g fill="none" fillRule="evenodd">
      <path d="M-1-2h24v24H-1z" stroke="none" />
      <path d="M-1-2h24v24H-1z" stroke="none" />
      <path d="M10.82 10.923H4.145v3.692h1.371c.214 0 .387.227.387.506v3.373c0 .28-.173.506-.387.506H1.387C1.173 19 1 18.773 1 18.494v-3.373c0-.28.173-.506.387-.506h1.92v-4.538h7.513V6.595H7.669c-.345 0-.625-.3-.625-.67V1.46c0-.37.28-.67.625-.67h6.662c.345 0 .625.3.625.67v4.465c0 .37-.28.67-.625.67H11.66v3.482h6.857v.846h-.148v3.692h2.245c.214 0 .387.227.387.506v3.373c0 .28-.173.506-.387.506h-4.13c-.213 0-.386-.227-.386-.506v-3.373c0-.28.173-.506.387-.506h1.046v-3.692H11.66v3.692h-.84v-3.692zM8.935 19c-.213 0-.387-.227-.387-.506v-3.373c0-.28.174-.506.387-.506h4.13c.213 0 .387.227.387.506v3.373c0 .28-.174.506-.387.506h-4.13z" stroke={props.color && props.color} strokeWidth=".839" strokeLinecap="round" />
    </g>
  </svg>
);

export default OrganigramIcon;
