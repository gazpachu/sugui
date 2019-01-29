import styled, { css } from 'styled-components';
import ExpandMoreIcon from '../../icons/expandMore';
import Paper from '../paper';
import Mixins from '../theme/mixins';

export const Container = styled(Paper)`
  margin: 10px 30px 10px 30px;
  padding: 20px;

  ${Mixins.mobile`
    margin-left: 0;
    margin-right: 0;
  `}
`;

export const Title = styled.div`
  font-size: 20px;
  padding: 0 20px 0px 20px;
  margin-bottom: 0;
  cursor: pointer;
  position: relative;

  ${props => props.isOpen && css`
    padding: 0 20px 15px 20px;
    border-bottom: 1px solid ${props.theme.colors.worryingSatin};
  `}
`;

export const Content = styled.div`
  height: 0px;
  overflow: hidden;
  transition: ease-out .3s;
  opacity: 0;

  ${props => props.show && css`
    margin-top: 20px;
    opacity: 1;
  `}

  &::after {
    content: '';
    display: block;
    clear: both;
  }
`;

export const Icon = styled(ExpandMoreIcon)`
  position: absolute;
  right: 20px;
  transition: transform ease-out .3s;
  stroke: ${(props) => { if (props.color) return props.theme.colors[props.color]; return props.theme.colors.mineShaft; }}

  ${props => props.open && css`
    transform: rotate(180deg);
  `}
`;
