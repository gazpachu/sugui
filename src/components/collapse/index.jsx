import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './collapse.styles';

const propTypes = {
  /**
   * The expanded state of the container
   */
  expanded: PropTypes.bool
};

const defaultProps = {
  expanded: false
};

class Collapse extends Component {
  componentDidMount() {
    this.resize(this.props.expanded ? this.props.expanded : defaultProps.expanded);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.expanded !== this.props.expanded) {
      this.resize(newProps.expanded);
    }
  }

  resize(expanded) {
    if (expanded) {
      this.content.style.height = `${this.content.scrollHeight}px`;
      this.content.style.opacity = '1';
    } else {
      this.content.style.height = '0';
      this.content.style.opacity = '0';
    }
  }

  render() {
    return (
      <Wrapper ref={(c) => { this.content = c; }}>
        {this.props.children}
      </Wrapper>
    );
  }
}

Collapse.propTypes = propTypes;
Collapse.defaultProps = defaultProps;

export default Collapse;
