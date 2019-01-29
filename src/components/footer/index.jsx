import styled from 'styled-components';

const Footer = styled.div`
  background-color: ${props => props.theme.colors.abbey};
  margin: 0 auto;
  padding: 20px;
  color: ${props => props.theme.colors.white};
  font-size: 14px;
  line-height: 18px;
  display: block;
`;

export default Footer;
