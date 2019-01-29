import styled, { keyframes, css } from 'styled-components';

const duration = '.3s';

export const switchOn = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.25); }
  100% { transform: scale(1.1); }
`;

export const switchOff = keyframes`
  0% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

export const Inner = styled.span`
  color: ${props => props.theme.colors.white};
  font-size: 12px;
  position: absolute;
  left: 24px;
`;

export const Container = styled.span`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 44px;
  height: 22px;
  line-height: 20px;
  vertical-align: middle;
  border-radius: 20px 20px;
  border: 1px solid ${props => props.theme.colors.worryingSatin};
  background-color: ${props => props.theme.colors.worryingSatin};
  cursor: pointer;
  transition: all ${duration} cubic-bezier(0.35, 0, 0.25, 1);

  &:after{
    position: absolute;
    width: 18px;
    height: 18px;
    left: 2px;
    top: 1px;
    border-radius: 50% 50%;
    background-color: ${props => props.theme.colors.white};
    content: ' ';
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
    transform: scale(1);
    transition: left ${duration} cubic-bezier(0.35, 0, 0.25, 1);
    animation-timing-function: cubic-bezier(0.35, 0, 0.25, 1);
    animation-duration: ${duration};
    animation-name: ${switchOff};
  }

  &:hover:after {
    transform: scale(1.1);
    animation-name: ${switchOn};
  }

  &:focus {
    box-shadow: 0 0 0 2px tint(#2db7f5, 80%);
    outline: none;
  }

  ${props => props.checked && css`
    border: 1px solid ${props.theme.colors[props.bg]};
    background-color: ${props.theme.colors[props.bg]};

    ${Inner} {
      left: 6px;
    }

    &:after{
      left: 22px;
    }
  `}

  ${props => props.disabled && css`
    cursor: no-drop;
    background: ${props.theme.colors.worryingSatin};
    border-color: ${props.theme.colors.worryingSatin};

    &:after{
      background: ${props.theme.colors.silverChalice};
      animation-name: none;
      cursor: no-drop;
    }

    &:hover:after{
      transform: scale(1);
      animation-name: none;
    }
  `}

  label {
    display: inline-block;
    line-height: 20px;
    font-size: 14px;
    padding-left: 10px;
    vertical-align: middle;
    white-space: normal;
    pointer-events: none;
    user-select: text;
  }
`;
