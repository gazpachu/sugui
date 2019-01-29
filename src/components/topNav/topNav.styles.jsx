import styled, { css } from 'styled-components';
import { Link } from 'react-router';
import Mixins from '../theme/mixins';
import {
  LogoutIcon,
  SearchIcon
} from '../../icons';

const hGutter = 32;
const MobileHGutter = 15;
const topNavHeight = 60;

export const Container = styled.section`
  background-color: ${props => props.theme.colors[props.bg]};
  position: fixed;
  z-index: 4;
  top: 0;
  width: 100%;
  height: ${topNavHeight}px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const NavButton = styled.button`
  margin-left: ${hGutter}px;
  margin-top: 22px;
  width: 25px;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  ${Mixins.mobile`
    margin-left: ${MobileHGutter}px;
  `}

  span {
    display: block;
    position: absolute;
    height: 1px;
    width: 100%;
    background-color: ${(props) => { if (props.color === 'white') return 'rgba(255,255,255,.5)'; return props.color; }};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: 0;
    }

    &:nth-child(2),
    &:nth-child(3) {
      top: 6px;
    }

    &:nth-child(4) {
      top: 12px;
    }
  }

  ${({ active }) => active && `
    span {
      &:nth-child(1) {
        top: 6px;
        width: 0;
        left: 50%;
      }

      &:nth-child(2) {
        transform: rotate(45deg);
      }

      &:nth-child(3) {
        transform: rotate(-45deg);
      }

      &:nth-child(4) {
        top: 14px;
        width: 0;
        left: 50%;
      }
    }
  `}
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;
`;

export const Logo = styled.div`
  svg { height: 28px; }

  ${Mixins.mobile`
    display: none;
  `}
`;

export const Symbol = styled.div`
  ${Mixins.desktop`
    display: none;
  `}
`;

export const RightContainer = styled.div`
  position: relative;
`;

export const UserMenu = styled.ul`
  display: none;
  background-color: ${props => props.theme.colors[props.bg]};
  list-style-type: none;
  padding: 0;
  margin: 0;
  right: 0;
  top: ${topNavHeight}px;
  position: absolute;
  width: 200px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 2px;
  border-top: none;
`;

export const Dropdown = styled.div`
  position: absolute;
  padding-top: 10px;
  right: ${hGutter}px;
  height: ${topNavHeight}px;

  ${Mixins.mobile`
    right: ${MobileHGutter}px;
  `}

  &:hover ${UserMenu} {
    display: block;
  }
`;

export const MenuItem = styled.li`
  cursor: pointer;
  border-bottom: 1px solid ${(props) => {
    if (props.bg !== 'white') return 'rgba(255,255,255,.2)'; return props.theme.colors.worryingSatin;
  }};

  &:last-child { border-bottom: none; }
  &:hover { background-color: ${(props) => {
    if (props.bg !== 'white') return 'rgba(255,255,255,.2)'; return props.theme.colors.wildSand;
  }};
`;

export const Button = styled.a`
  padding: 15px 25px;
  display: block;
  text-decoration: none;
  color: ${(props) => {
    if (props.bg !== 'white') return props.theme.colors[props.color]; return props.theme.colors.mineShaft;
  }};
  font-size: 16px;

  &:hover {
    text-decoration: none;
    color: ${(props) => {
      if (props.bg !== 'white') return props.theme.colors[props.color]; return props.theme.colors.mineShaft;
    }};
  }
`;

export const MenuItemIcon = css`
  vertical-align: middle;
  margin-right: 10px;
  min-width: 30px;
`;

export const StyledLogoutIcon = styled(LogoutIcon)`
  ${MenuItemIcon};
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 90px;
  top: 14px;

  ${Mixins.mobile`
    right: 60px;
  `}
`;

export const StyledSearchIcon = styled(SearchIcon)`
  width: 30px;
  height: 30px;
`;
