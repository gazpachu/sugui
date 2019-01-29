import styled from 'styled-components';

export const Container = styled.div`
  cursor: ${(props) => { if (props.disabled) return 'not-allowed'; return 'pointer'; }};
`;

export const Box = styled.div`
  position: relative;
  float: left;
  display: inline-flex;
  border-radius: 50px;
  border: ${(props) => {
    if (!props.disabled) return `1px solid ${props.theme.colors[props.color]}`;
    if (props.disabled) return `1px solid ${props.theme.colors.mercury}`;
    return 'none';
  }};
  width: 24px;
  height: 24px;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 50px;
    width: 14px;
    height: 14px;
    background-color: ${(props) => {
    if (props.checked && !props.disabled) return props.theme.colors[props.color];
    if (props.checked && props.disabled) return props.theme.colors.mercury;
    return 'none';
  }};
  }
`;

export const Label = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  margin-left: 30px;
`;
