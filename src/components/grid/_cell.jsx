import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * To apply styles to the component
   */
  className: PropTypes.string,
  /**
   * Cell width in units, default is 1
   */
  width: PropTypes.number,
  /**
   * Cell height in units, default is 1
   */
  height: PropTypes.number,
  /**
   * The grid-row-start CSS property
   */
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * The grid-column-start CSS property
   */
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Vertically align the contents of the cell
   */
  middle: PropTypes.bool,
  /**
   * Horizontally align the text contents of the cell
   */
  center: PropTypes.bool,
  /**
   * The grid-area CSS property
   */
  area: PropTypes.string
};

const defaultProps = {
  width: 1,
  height: 1,
  middle: false,
  center: false
};

const Cell = styled.div`
  height: 100%;
  min-width: 0;
  grid-column-end: ${props => `span ${props.width}`};
  grid-row-end: ${props => `span ${props.height}`};

  ${props => props.left && `grid-column-start: ${props.left}`};
  ${props => props.top && `grid-row-start: ${props.top}`};

  ${props => props.center && 'text-align: center'};

  ${props => props.area && `grid-area: ${props.area}`};

  ${props => props.middle && `
    display: inline-flex;
    flex-flow: column wrap;
    justify-content: center;
    justify-self: stretch;
  `};
`;

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

/**
 * @component
 */
export default Cell;
