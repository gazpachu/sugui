import { css } from 'styled-components';

const mixins = {
  desktopUhd: (...args) => css`
    @media (min-width: 1700pxpx) {
      ${css(...args)}
    }
  `,
  desktopHd: (...args) => css`
    @media (min-width: 1280pxpx) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 769px) {
      ${css(...args)}
    }
  `,
  mobile: (...args) => css`
    @media (max-width: 768px) {
      ${css(...args)}
    }
  `,
  mobileSmall: (...args) => css`
    @media (max-width: 543px) {
      ${css(...args)}
    }
  `,
  clearfix: () => css`
    &::after {
      display: block;
      content: "";
      clear: both;
    }
  `
};

export default mixins;
