import styled, { css } from 'styled-components';

const getSize = (size) => {
  switch (size) {
    case 'xlarge': return '80px';
    case 'large': return '60px';
    case 'medium': return '40px';
    case 'small': return '32px';
    default: return '32px';
  }
};

export const Container = styled.div`
  overflow: hidden;
  border-radius: 100px;
  width: ${props => getSize(props.size)};
  height: ${props => getSize(props.size)};
  display: inline-block;
  vertical-align: middle;
  color: ${(props) => { if (props.backgroundColor === props.theme.colors.white) return props.theme.colors.abbey; return props.theme.colors.white; }}
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backgroundColor};
  ${props => props.backgroundColor === props.theme.colors.white && css`border: 1px solid ${props.theme.colors.worryingSatin}`};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: contain;
`;

export const Initials = styled.span`
  font-size: 20px;

  ${props => props.size === 'xlarge' && css`
    font-size: 35px;

    ${props.theme.mixins.mobile`
      font-size: 20px;
    `}
  `}
`;
