import styled, { css } from 'styled-components';
import ExpandMoreIcon from '../../icons/expandMore';

export const Container = styled.section`

`;

export const PageIndicator = styled.span`
  margin-right: 20px;
`;

export const ArrowButton = styled.button`
  padding: 0;
  height: 40px;
  width: 40px;
  position: relative;
  cursor: ${props => props.disabled && css`not-allowed`};

  svg { opacity: ${props => props.disabled && css`.5`}; }

  &:before {
    content: '';
    border-left: ${props => props.variant === 'table' && css`1px solid ${props.theme.colors.mercury}`};
    height: 40px;
    position: absolute;
    top: 0;
    left: 0;
  }

  &:after {
    content: '';
    border-right: ${props => props.variant === 'table' && css`1px solid ${props.theme.colors.mercury}`};
    height: 40px;
    position: absolute;
    top: 0;
    right: 0;
    display: ${(props) => { if (props.direction === 'prev') return 'block'; return 'none'; }};
  }

  &:hover {
    background-color: ${props => props.theme.colors.wildSand};
  }
`;

export const ArrowLeftIcon = styled(ExpandMoreIcon)`
  vertical-align: middle;
  transform: rotate(90deg);
  width: 24px;
  height: 24px;
`;

export const ArrowRightIcon = styled(ExpandMoreIcon)`
  vertical-align: middle;
  transform: rotate(-90deg);
  width: 24px;
  height: 24px;
`;

export const PageSelector = styled.select`
  border: none;
  background: none;
  margin: 0 15px;
`;
