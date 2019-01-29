import styled, { css } from 'styled-components';
import Mixins from '../theme/mixins';

const vOffset = 60;

export const Container = styled.section`
  height: 100vh;
  width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: ${vOffset}px;
  z-index: 11;
  ${props => !props.active && css`pointer-events: none;`};

  a[target="_blank"]:after {
    filter: invert(100%);
    margin-left: 5px;
  }
`;

export const NavScroll = styled.div`
  z-index: 2;
  background-color: rgba(0,0,0,.9);
  position: relative;
  height: calc(100vh - ${vOffset}px);
  width: 300px;
  left: -300px;
  transition: left 200ms ease-in-out;

  ${Mixins.mobile`
    left: -100%;
    width: 100%;
  `}

  ${props => props.active && css`&& { left: 0; }`};
`;

export const NavItems = styled.ul`
  padding: 0;
  list-style-type: none;
  margin-bottom: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: -moz-scrollbars-none;
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  margin-top: 0;
  height: calc(100vh - ${vOffset}px);

  &::-webkit-scrollbar {
    display: none;
  }

  li {
    cursor: pointer;

    &:hover {
      background-color: rgba(255,255,255,.2);
    }

    > a, > span, > button, > div {
      color: ${props => props.theme.colors.mercury};
      padding: 10px 7px 10px 20px;
      display: block;
      cursor: pointer;
      font-size: 14px;
      font-weight: lighter;
      text-decoration: none;

      svg {
        fill: ${props => props.theme.colors.white};
        margin-right: 10px;
        vertical-align: middle;
      }
    }
  }
`;

export const Overlay = styled.button`
  position: fixed;
  top: ${vOffset}px;
  left: 0;
  width: 100%;
  height: calc(100vh - ${vOffset}px);
  background-color: rgba(0,0,0,.5);
  z-index: 1;
  cursor: pointer;
  display: block;
  opacity: 0;
  transition: opacity .3s;
  ${props => props.active && css`opacity: 1;`};
`;
