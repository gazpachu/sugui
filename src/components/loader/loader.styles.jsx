import styled, { keyframes } from 'styled-components';
import SuguiLogo from '../../logos/suguiLogo';

const rotate = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

export const LoaderContainer = styled.section.attrs({
  'data-testid': 'loader'
})`
  position: fixed;
  top: ${(props) => { if (props.noTopNav) return '0'; return `${props.topOffset}px`; }}
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0,.9);
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${(props) => { if (props.isLoading) return props.theme.animations.fadeIn; return props.theme.animations.fadeOut; }} 0.5s forwards;
`;

export const LoaderWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderCircle = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.2);
  background-color: rgba(0,0,0,.2);
`;

export const LoaderContent = styled.div`
  position: absolute;
  width: 172px;
  height: 170px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  text-align: center;
`;

export const Logo = styled(SuguiLogo)`
  width: 150px;
  height: 150px;
`;

export const LoaderLineMask = styled.div`
  position: absolute;
  left: 0;
  width: 100px;
  height: 200px;
  overflow: hidden;
  z-index: 2;
  transform-origin: 100px 100px;
  mask-image: linear-gradient(to bottom, rgba(255, 255, 255,1), rgba(255, 255, 255,0));
  animation: ${rotate} 1.2s infinite linear;
  transition: all 0.3s;
`;

export const LoaderLine = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 2px ${props => props.theme.colors.white};
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
`;
