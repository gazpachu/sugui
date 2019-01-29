import styled from 'styled-components';
import PropTypes from 'prop-types';
// From https://styled-css-grid.js.org/

const propTypes = {
  /**
   * To apply styles to the component
   */
  className: PropTypes.string,
  /**
   * The grid-template-columns CSS property. When a number is passed it is a shorthand to specify the number of columns
   */
  columns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The grid-gap CSS property
   */
  gap: PropTypes.string,
  /**
   * The column-gap CSS property
   */
  columnGap: PropTypes.string,
  /**
   * The row-gap CSS property
   */
  rowGap: PropTypes.string,
  /**
   * The height CSS property
   */
  height: PropTypes.string,
  /**
   * Minimum height of each row
   */
  minRowHeight: PropTypes.string,
  /**
   * The grid-auto-flow CSS property
   */
  flow: PropTypes.string,
  /**
   * The grid-template-rows CSS property. When a number is passed it is a shorthand to specify the number of columns
   */
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The grid-template-areas CSS property. Pass an array of strings, e.g. ["a a", "b c"]
   */
  areas: PropTypes.arrayOf(PropTypes.string),
  /**
   * The justify-content CSS property
   */
  justifyContent: PropTypes.string,
  /**
   * The align-content CSS property
   */
  alignContent: PropTypes.string
};

const defaultProps = {
  columns: 12,
  gap: '8px',
  flow: 'row',
  minRowHeight: '20px',
  height: 'auto'
};

const frGetter = (value) => { if (typeof value === 'number') return `repeat(${value}, 1fr)`; return value; };

const formatAreas = areas => areas.map(area => `'${area}'`).join(' ');

const Grid = styled.div`
  display: grid;
  height: ${({ height = 'auto' }) => height};
  grid-auto-flow: ${props => props.flow};
  grid-auto-rows: ${props => `minmax(${props.minRowHeight}, auto)`};
  ${({ rows }) => rows && `grid-template-rows: ${frGetter(rows)}`};
  grid-template-columns: ${props => frGetter(props.columns)};
  grid-gap: ${props => props.gap};
  ${({ columnGap }) => columnGap && `column-gap: ${columnGap}`};
  ${({ rowGap }) => rowGap && `row-gap: ${rowGap}`};
  ${({ areas }) => areas && `grid-template-areas: ${formatAreas(areas)}`};
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`};
  ${({ alignContent }) => alignContent && `align-content: ${alignContent}; flex: 1;`};
`;

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

/**
 * @component
 */
export default Grid;
