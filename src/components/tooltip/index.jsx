import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import TooltipWrapper from './_tooltipWrapper';

const propTypes = {
  /**
   * Parent DOM element to use its position
   */
  parent: PropTypes.node.isRequired,
  /**
   * Offset in px from the parent element
   */
  offset: PropTypes.number,
  /**
   * Position of the tooltip. WIP [left, right, bottom]
   */
  position: PropTypes.string,
  /**
   * CSS styles
   */
  className: PropTypes.string
};

const defaultProps = {
  offset: 10,
  position: 'top',
  className: null
};

class Tooltip extends PureComponent {
  render() {
    const {
      parent,
      offset,
      position,
      className
    } = this.props;

    return createPortal(
      <TooltipWrapper
        parent={parent}
        offset={offset}
        position={position}
        className={className}
      >
        {this.props.children}
      </TooltipWrapper>,
      document.body,
    );
  }
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
