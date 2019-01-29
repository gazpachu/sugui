import styled from 'styled-components';

const Wrapper = styled.div.attrs({
  'data-testid': 'collapse'
})`
  height: 0px;
  overflow: hidden;
  transition: 0.2s ease all;
`;

export default Wrapper;
