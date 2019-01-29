import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
`;

export const Label = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const BadgeStyle = styled.div`
  background-color: ${props => props.theme.colors[props.color]};
  color: ${props => props.theme.colors.white};
  display: flex;
  font-size: 14px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  margin-left: 5px;
  vertical-align: middle;
`;
