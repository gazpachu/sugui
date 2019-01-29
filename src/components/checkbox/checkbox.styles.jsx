import styled from 'styled-components';
import { CheckIcon } from '../../icons';

export const Container = styled.div`
  position: relative;
  vertical-align: middle;
  cursor: ${(props) => { if (props.disabled) return 'not-allowed'; return 'pointer'; }};
`;

export const Box = styled.div`
  float: left;
  display: inline-flex;
  border-radius: 4px;
  background-color: ${(props) => {
    if (props.checked && !props.disabled) return props.theme.colors[props.color];
    if (props.disabled) return props.theme.colors.mercury;
    return 'none';
  }};
  border: ${(props) => {
    if (!props.checked && !props.disabled) return `1px solid ${props.theme.colors[props.color]}`;
    if (props.disabled) return `1px solid ${props.theme.colors.mercury}`;
    return 'none';
  }};
  width: 24px;
  height: 24px;
`;

export const Label = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  margin-left: 30px;
`;

export const StyledCheckIcon = styled(CheckIcon)`
  width: 24px;
  height: 24px;
`;
