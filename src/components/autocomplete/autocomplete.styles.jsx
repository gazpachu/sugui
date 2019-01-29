import styled, { css } from 'styled-components';
import CircularProgress from '../circularProgress';
import Paper from '../paper';

export const SearchContainer = styled.div`
  margin: 0 auto;
  position: relative;
`;

export const Info = styled.span`
  float: left;
  margin-top: 4px;
  font-size: 10px;
  color: ${props => props.theme.colors[props.color]};
`;

export const Bars = styled.ul`
  list-style-type: none;
  display: inline-block;
  float: right;
  margin: 0;
  padding: 0;
`;

export const Bar = styled.li`
  height: 6px;
  width: 16px;
  border: 1px solid ${props => props.theme.colors[props.color]};
  border-radius: 2px;
  display: inline-block;
  margin-left: 3px;
  ${props => props.active && css`background-color: ${props.theme.colors[props.color]}`}
`;

export const SuggestionsContainer = styled(Paper)`
  margin-top: 30px;
  overflow: hidden;
  z-index: 1;
  position: relative;

  > ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: left;

    li {
      padding: 14px 24px;
      cursor: pointer;
      border-bottom: 1px solid ${props => props.theme.colors.mercury};

      &:last-child {
        border-bottom: none;
      }

      &:hover,
      &.react-autosuggest__suggestion--highlighted {
        color: ${props => props.theme.colors.mineShaft};
        background-color: ${props => props.theme.colors.mercury};
      }
    }
  }
`;

export const StyledCircularProgress = styled(CircularProgress)`
  position: absolute;
  z-index: 1;
  top: 10px;
  right: 10px;
`;

export const ListItem = styled.div`
  color: black;
`;
