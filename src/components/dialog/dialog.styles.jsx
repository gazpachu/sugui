import styled, { css } from 'styled-components';
import Paper from '../paper';

export const Container = styled.div`
  position: fixed;
  top: ${props => `${props.topOffset}px`}
  left: 0;
  width: 100%;
  height: 100%;
  display: ${(props) => { if (props.open === null) return 'none'; return 'flex'; }}
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,.9);
  animation: ${(props) => {
    if (props.open && props.open !== null) return css`${props.theme.animations.fadeIn} 0.5s`;
    if (!props.open && props.open !== null) return css`${props.theme.animations.fadeOut} 0.5s forwards`;
    return 'none';
  }}
`;

export const DialogContainer = styled(Paper)`
  overflow: hidden;
`;

export const Content = styled.div`
  padding: 20px;
`;

export const Title = styled.h2`
  padding: 20px;
  font-size: 24px;
  text-align: center;
  line-height: 30px;
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.wildSand};
  box-shadow: 0 3px 12px 0 rgba(0,0,0,0.13);
  margin-bottom: 0;
`;
