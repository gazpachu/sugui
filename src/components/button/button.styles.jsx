import styled, { css } from 'styled-components';
import { darken } from 'polished';

const colorsWithDarkForeground = ['wildSand', 'mercury', 'alto', 'worryingSatin', 'silver', 'porcelain', 'freshOrange', 'lemonYellow', 'springGreen', 'aquaBlue'];

const Container = styled.button`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  padding: 5px 25px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  transition: background 0.8s;
  height: 32px;

  svg {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }

  ${props => props.variant === 'contained' && css`
    color: ${colorsWithDarkForeground.some(v => props.color.indexOf(v) >= 0) ? props.theme.colors.mineShaft : props.theme.colors.white};
    background-color: ${props.theme.colors[props.color]};
    svg { stroke: ${colorsWithDarkForeground.some(v => props.color.indexOf(v) >= 0) ? props.theme.colors.mineShaft : props.theme.colors.white}; }
  `}

  ${props => props.variant === 'outlined' && css`
    border: 1px solid ${props.darkBg && props.color === 'secondary' ? props.theme.colors.porcelain : props.theme.colors[props.color]};
    ${props.darkBg && css`
      color: ${props.color === 'porcelain' || props.color === 'secondary' ? props.theme.colors.white : props.theme.colors[props.color]};
    `};
    ${!props.darkBg && css`
      color: ${props.color === 'porcelain' ? props.theme.colors.mineShaft : props.theme.colors[props.color]};
    `};
    svg { stroke: ${props.darkBg && props.color === 'secondary' ? props.theme.colors.white : props.theme.colors[props.color]}; }
  `}

  ${props => props.variant === 'text' && css`
    ${props.darkBg && css`
      color: ${props.color === 'porcelain' || props.color === 'secondary' ? props.theme.colors.white : props.theme.colors[props.color]};
    `};
    ${!props.darkBg && css`
      color: ${props.color === 'porcelain' ? props.theme.colors.mineShaft : props.theme.colors[props.color]};
    `};
    svg { stroke: ${props.darkBg && props.color === 'secondary' ? props.theme.colors.white : props.theme.colors[props.color]}; }
  `}

  ${props => props.variant === 'fab' && css`
    border-radius: 50px;
    height: 64px;
    font-size: 18px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);
    padding: 5px 23px;
    color: ${colorsWithDarkForeground.some(v => props.color.indexOf(v) >= 0) ? props.theme.colors.mineShaft : props.theme.colors.white};
    background-color: ${props.theme.colors[props.color]};
    svg { stroke: ${colorsWithDarkForeground.some(v => props.color.indexOf(v) >= 0) ? props.theme.colors.mineShaft : props.theme.colors.white}; }
  `}

  ${props => props.disabled && css`
    opacity: .5;
    pointer-events: none;
  `}

  ${props => props.liquid && css`width: 100%;`}
  ${props => props.size === 'small' && css`padding: 4px 10px;`}
  ${props => props.size === 'large' && css`height: 48px;`}

  ${props => props.iconPos === 'left' && css`svg { margin-right: 10px; }`}
  ${props => props.iconPos === 'right' && css`svg { margin-left: 10px; }`}
  ${props => props.iconPos === 'center' && props.variant !== 'fab' && css`
    padding-left: 7px;
    padding-right: 7px;
  `}

  &:hover {
    ${props => css`
      background: ${darken(0.1, props.theme.colors[props.color])} radial-gradient(circle, transparent 1%, ${props.theme.colors[props.color]} 1%) center/15000%;
      color: ${(props.color.indexOf('Light') >= 0) ? props.theme.colors.mineShaft : props.theme.colors.white};
      svg { stroke: ${(props.color.indexOf('Light') >= 0) ? props.theme.colors.mineShaft : props.theme.colors.white}; }
    `}
  }

  &:active {
    background-color: ${props => darken(0.1, props.theme.colors[props.color])}
    background-size: 100%;
    transition: background 0s;
  }
`;

export default Container;
