import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  padding: 20px 30px;
  top: ${props => `${props.topOffset}px`}
  left: 0;
  width: 100%;
  height: 100%;
  display: ${(props) => { if (props.open === null) return 'none'; return 'flex'; }}
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,.9);
  animation: ${(props) => {
    if (props.open && props.open !== null) return css`${props.theme.animations.fadeIn} 0.5s`;
    if (!props.open && props.open !== null) return css`${props.theme.animations.fadeOut} 0.5s forwards`;
    return 'none';
  }}
`;

export const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  line-height: 30px;
  color: white;
  display: block;
  margin-bottom: 30px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
`;
