import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import Mixins from './mixins';

const Global = createGlobalStyle`
  ${normalize()};

  html {
    box-sizing: border-box;
  }

  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700');

  body {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
    line-height: 24px;

    ${Mixins.mobile`
      font-size: 16px;
    `};

    &.no-scroll {
      overflow: hidden;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-weight: lighter;
  }

  h1 {
    font-size: 32px;
    line-height: 40px;

    ${Mixins.desktop`
      font-size: 56px;
      line-height: 62px;
    `};

    ${Mixins.desktopHd`
      font-size: 64px;
      line-height: 72px;
    `};
  }

  h2 {
    font-size: 28px;
    line-height: 36px;

    ${Mixins.desktop`
      font-size: 40px;
      line-height: 48px;
    `};

    ${Mixins.desktopHd`
      font-size: 56px;
      line-height: 62px;
    `};
  }

  h3 {
    font-size: 24px;
    line-height: 30px;

    ${Mixins.desktop`
      font-size: 34px;
      line-height: 40px;
    `};

    ${Mixins.desktopHd`
      font-size: 40px;
      line-height: 48px;
    `};
  }

  h4 {
    font-size: 20px;
    line-height: 28px;

    ${Mixins.desktop`
      font-size: 24px;
      line-height: 30px;
    `};

    ${Mixins.desktopHd`
      font-size: 28px;
      line-height: 34px;
    `};
  }

  h5 {
    font-size: 18px;
    line-height: 24px;

    ${Mixins.desktop`
      font-size: 20px;
      line-height: 28px;
    `};

    ${Mixins.desktopHd`
      font-size: 20px;
      line-height: 28px;
    `};
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  a,
  a:active,
  a:focus,
  a:hover,
  a:visited {
    color: black;
    text-decoration: underline;
  }

  a.button { text-decoration: none; }

  button,
  [role="button"],
  [role="checkbox"],
  [role="radio"],
  input,
  textarea {
    border: none;
    background: none;
  }

  button,
  [role="button"],
  [role="checkbox"],
  [role="radio"],
  input,
  select,
  textarea {
    &:focus {
      outline: none !important;
    }
  }

  button {
    cursor: pointer;
  }

  a[target="_blank"]:after {
    content: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CjxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0xNCAxNnYtMTFsLTEgMXY5aC0xMnYtMTJoOWwxLTFoLTExdjE0eiIvPgo8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNMTYgMGgtNWwxLjggMS44LTYuOCA2LjggMS40IDEuNCA2LjgtNi44IDEuOCAxLjh6Ii8+Cjwvc3ZnPgo=);
    margin-left: 2px;
    vertical-align: middle;
    transform: scale(0.8);
    display: inline-block;
  }
`;

export default Global;
