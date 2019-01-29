import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Title,
  Content,
  Icon
} from './accordion.styles';

const propTypes = {
  /**
   * The content to render within the acordion
   */
  children: PropTypes.node.isRequired,
  /**
   * Title of the accordion
   */
  title: PropTypes.string,
  /**
   * Color for the chevron
   */
  color: PropTypes.string,
  /**
   * CSS styles
   */
  className: PropTypes.string,
  /**
   * Callback when the accordion state changes
   */
  onChange: PropTypes.func
};

const defaultProps = {
  title: '',
  color: null,
  className: null,
  onChange: null
};

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //  isOpen to be seeded by prop only once [correct pattern]
      isOpen: props.openByDefault ? props.openByDefault : false
    };
  }

  componentDidMount() {
    this.resize();
  }

  componentDidUpdate() {
    // It needs to be on update to cater for async and dynamic content
    this.resize();
  }

  resize() {
    if (this.state.isOpen) this.content.style.height = `${this.content.scrollHeight}px`;
    else this.content.style.height = '0';
  }

  render() {
    const {
      title,
      color,
      children,
      className,
      onChange
    } = this.props;
    const { isOpen } = this.state;

    return (
      <Container className={className}>
        <Title
          onClick={() => {
            this.setState({ isOpen: !this.state.isOpen }, () => {
              if (onChange) onChange();
            });
          }}
          isOpen={isOpen}
        >
          {title}
          <Icon open={isOpen} color={color} />
        </Title>
        <Content show={isOpen} ref={(c) => { this.content = c; }}>
          {children}
        </Content>
      </Container>
    );
  }
}

Accordion.propTypes = propTypes;
Accordion.defaultProps = defaultProps;

export default Accordion;
