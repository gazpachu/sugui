import styled from 'styled-components';
import theme from '../theme/settings';

const AppContainer = styled.div`
  position: relative;
  min-height: calc(100vh - 60px);
  top: 60px;

  a { color: ${theme.colors.mineShaft}; } // TODO Remove when SC v4 is ready
`;

export default AppContainer;
