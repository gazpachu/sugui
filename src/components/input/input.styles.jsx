import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  ${props => props.disabled && css`opacity: .6`};
`;

const sharedStyles = css`
  width: 100%;
  transition: 0.2s ease all;
  font-size: 16px;
  color: ${(props) => {
    if (props.darkBg && props.isValid === null) return props.theme.colors[props.color];
    if (props.darkBg && props.isValid !== null && props.isValid) return props.theme.colors.green;
    if (props.darkBg && props.isValid !== null && !props.isValid) return props.theme.colors.red;
    return props.theme.colors.mineShaft;
  }};
  padding: 10px 0;
  display: block;
  border: 1px solid ${(props) => { if (props.color === 'white') return 'rgba(255,255,255,0.5)'; return props.theme.colors[props.color]; }};
  border-radius: 6px;
  background-color: ${(props) => { if (props.color === 'white') return 'rgba(255,255,255,0.1)'; return 'white'; }};
  padding-left: ${(props) => { if ((props.icon && !props.iconPos) || props.iconPos === 'left') return '40px'; return '16px'; }};
  padding-right: ${(props) => { if (props.iconPos === 'right') return '40px'; return '16px'; }};

  &::placeholder {
    color: ${props => props.theme.colors[props.color]};
  }

  &:focus {
    ${(props) => { if (!props.readOnly) return 'border-width: 2px'; return null; }}
    border-color: props.theme.colors.silverChalice;
  }

  ${props => props.readOnly && css`cursor: pointer`};

  ${(props) => {
    if (props.isValid !== null && props.isValid) return `border: 2px solid ${props.theme.colors.green}`;
    if (props.isValid !== null && !props.isValid) return `border: 2px solid ${props.theme.colors.red}`;
    return null;
  }}
`;

export const InputField = styled.input`
  ${sharedStyles};
  height: ${(props) => { if (props.size === 'small') return '32px'; return '48px'; }};
`;

export const Textarea = styled.textarea`
  ${sharedStyles};
  min-height: 120px;
`;

export const Icon = styled.div`
  position: absolute;
  ${(props) => { if ((props.icon !== null && !props.iconPos) || props.iconPos === 'left') return 'left: 16px;'; return ''; }};
  ${(props) => { if (props.iconPos === 'right') return 'right: 16px;'; return ''; }};
  top: ${(props) => { if (props.size === 'small') return '6px'; return '14px'; }};

  svg {
    width: 20px;
    height: 20px;
    stroke: ${props => props.theme.colors[props.color]};
  }
`;
