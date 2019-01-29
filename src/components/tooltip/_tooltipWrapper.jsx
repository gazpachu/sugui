import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import theme from '../theme/settings';

const propTypes = {
  parent: PropTypes.node.isRequired,
  offset: PropTypes.number,
  position: PropTypes.string
};

const defaultProps = {
  offset: 10,
  position: 'top'
};

class TooltipWrapper extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      top: 0,
      left: 0
    };
  }

  componentDidMount() {
    this.getTipPosition();
  }

  componentWillUpdate() {
    this.getTipPosition();
  }

  getTipPosition() {
    const { parent, position, offset } = this.props;
    if (!this.tip || !parent) return;

    const scrollY = (window.scrollY !== undefined) ? window.scrollY : window.pageYOffset;
    const scrollX = (window.scrollX !== undefined) ? window.scrollX : window.pageXOffset;

    const pNode = parent.getBoundingClientRect();
    const tipNode = this.tip.getBoundingClientRect();

    let top;
    let left;

    switch (position) {
      case 'top':
        top = (scrollY + pNode.top) - tipNode.height - offset;
        left = (scrollX + pNode.left + (pNode.width / 2)) - (tipNode.width / 2);
        break;

      case 'left':
        top = (scrollY + pNode.top + (pNode.height / 2)) - offset;
        left = (scrollX + pNode.left) - offset - tipNode.width;
        break;

      case 'bottom':
        top = scrollY + pNode.top + pNode.height + offset;
        left = (scrollX + pNode.left + (pNode.width / 2)) - (tipNode.width / 2);
        break;

      case 'right':
        top = (scrollY + pNode.top + (pNode.height / 2)) - offset;
        left = scrollX + pNode.left + pNode.width + offset;
        break;

      default:
    }

    this.setState({ top, left });
  }

  render() {
    const { top, left } = this.state;

    return (
      <div
        ref={(c) => { this.tip = c; }}
        style={{
          position: 'absolute',
          zIndex: 1000,
          backgroundColor: theme.colors.secondary,
          color: 'white',
          padding: 8,
          borderRadius: '6px',
          top,
          left
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

TooltipWrapper.propTypes = propTypes;
TooltipWrapper.defaultProps = defaultProps;

export default TooltipWrapper;
