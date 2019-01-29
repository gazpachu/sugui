import styled from 'styled-components';

const Footer = styled.div`
  background-color: ${props => props.theme.colors.abbey};
  margin: 0 auto;
  padding: 20px;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.typography.footNote.fontSize};
  line-height: ${props => props.theme.typography.footNote.lineHeight};
  display: block;
`;

export default Footer;
