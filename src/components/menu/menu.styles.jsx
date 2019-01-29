import styled from 'styled-components';
import Paper from '../paper';

const Wrapper = styled(Paper)`
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: absolute;
  z-index: 1;
  overflow: hidden;
  display: ${(props) => { if (props.open) return 'block;'; return 'none;'; }}
  /* Maybe we can read the 60px from the theme file... */
  top: ${(props) => { if (props.anchorEl && props.anchorEl.top) return `${props.anchorEl.top - 60}px`; return 0; }}
  left: ${(props) => { if (props.anchorEl && props.anchorEl.left) return `${props.anchorEl.left}px`; return 'auto'; }}
  right: ${(props) => { if (props.anchorEl && !props.anchorEl.left) return 0; return 'auto'; }}

  li {
    color: black;
    font-size: 16px;
    border-bottom: 1px solid ${props => props.theme.colors.worryingSatin};
    padding: 8px 16px;
    cursor: pointer;

    &:last-child { border-bottom: none; }
    &:hover { background-color: ${props => props.theme.colors.mercury}; }
  }
`;

export default Wrapper;
