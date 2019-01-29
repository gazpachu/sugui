import styled, { css } from 'styled-components';

export const TabsContainer = styled.div`
  height: 50px;
  background-color: ${props => props.theme.colors.white};
  width: 100%;
  text-align: center;
`;

export const TabContainer = styled.button`
  display: inline-flex;
  height: 100%;
  padding: 4px 10px;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  ${props => props.active && css`
    color: ${props.theme.colors.red};
    border-bottom: 3px solid ${props.theme.colors.red};
  `}
`;
