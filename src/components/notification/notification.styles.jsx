import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 10;
  bottom: 20px;
  left: 20px;
  display: ${(props) => { if (props.message !== '') return 'grid'; return 'none'; }}
  grid-template-columns: 54px 1fr;
  align-items: start;
  max-width: 568px;
  min-height: 46px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  background-color: ${props => props.theme.colors.digitalGrey};
  border: 1px solid ${(props) => {
    if (props.variant === 'success') return props.theme.colors.digitalGreen;
    if (props.variant === 'error') return props.theme.colors.digitalDarkRed;
    if (props.variant === 'warning') return props.theme.colors.lemonYellow;
    return props.theme.colors.digitalGrey;
  }};
  animation: ${(props) => { if (props.open) return props.theme.animations.bounceInLeft; return props.theme.animations.fadeOut; }} 0.5s forwards;
`;

export const StyledCloseButton = styled.button`
  margin-top: 10px;
  padding: 0;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const Message = styled.div`
  padding: 13px 16px;
  color: ${props => props.theme.colors.white};
  font-size: 15px;
  line-height: 20px;

  svg {
    margin-right: 10px;
    vertical-align: middle;
  }
`;

export const IconBlock = styled.div`
  height: 100%;
  padding-top: 10px;
  text-align: center;
  background-color: ${(props) => {
    if (props.variant === 'success') return props.theme.colors.digitalGreen;
    if (props.variant === 'error') return props.theme.colors.digitalDarkRed;
    if (props.variant === 'warning') return props.theme.colors.lemonYellow;
    return props.theme.colors.digitalGrey;
  }};
`;
