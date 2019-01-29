import styled, { css } from 'styled-components';
import Paper from '../paper';
import ExpandMoreIcon from '../../icons/expandMore';

export const SelectWrapper = styled.div`
  position: relative;
`;

export const SuggestionsContainer = styled(Paper)`
  margin-top: 10px;
  overflow: hidden;
  z-index: 1;
  position: absolute;
  width: 100%;
  max-height: 0px;
  overflow: hidden;
  transition: ease-out .2s all;

  ${props => props.open && css`
    max-height: 200px;
  `}
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: left;
  max-height: 200px;
  overflow-y: ${props => props.hasScroll && css`scroll`};
`;

export const ListItem = styled.li`
  padding: 14px 24px;
  cursor: pointer;
  border-bottom: 1px solid ${props => props.theme.colors.mercury};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: ${props => props.theme.colors.mineShaft};
    background-color: ${props => props.theme.colors.mercury};
  }
`;

export const Icon = styled(ExpandMoreIcon)`
  position: absolute;
  pointer-events: none;
  right: 15px;
  top: ${(props) => { if (props.label) return '30px'; return '8px'; }}
  transition: transform ease-out .3s;
  stroke: ${(props) => { if (props.color) return props.theme.colors[props.color]; return props.theme.colors.mineShaft; }}

  ${props => props.open && css`
    transform: rotate(180deg);
  `}
`;
