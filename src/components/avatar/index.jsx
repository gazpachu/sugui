import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Image, Initials } from './avatar.styles';
import theme from '../theme/settings';

const colors = [
  theme.colors.redViolet,
  theme.colors.aubergine,
  theme.colors.aquaBlue,
  theme.colors.turquoise,
  theme.colors.springGreen,
  theme.colors.lemonYellow,
  theme.colors.freshOrange
];
const randomColor = colors[Math.floor(Math.random() * colors.length)];

const propTypes = {
  /**
   * The URL of the avatar image (PNG/JPG/GIF)
   */
  url: PropTypes.string,
  /**
   * First and last name (with a space in between). It's used to find the initials to display if there's no image or there was an error loading it
   */
  name: PropTypes.string.isRequired,
  /**
   * Use a random color from the color palette for the background
   */
  forceRandom: PropTypes.bool,
  /**
   * Set background color from the theme. White background will invert the text colour
   */
  bg: PropTypes.string,
  /**
   * Size of the avatar
   */
  size: PropTypes.oneOf(['xlarge', 'large', 'medium', 'small']),
  /**
   * CSS styles
   */
  className: PropTypes.string
};

const defaultProps = {
  url: null,
  forceRandom: false,
  bg: 'silver',
  size: 'medium',
  className: null
};

class Avatar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //  url and bg to be seeded by prop only once [correct pattern]
      url: this.props.url,
      bg: this.props.forceRandom ? randomColor : theme.colors[this.props.bg]
    };
  }

  static getInitials(string) {
    const names = string.split(' ');
    let initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  }

  render() {
    const {
      name,
      url,
      size,
      className
    } = this.props;

    const initials = Avatar.getInitials(name);

    return (
      <Container backgroundColor={this.state.bg} size={size} className={className}>
        {this.state.url
          ? <Image alt="" src={url} onError={() => this.setState({ url: null })} />
          : <Initials size={size}>{initials}</Initials>
        }
      </Container>
    );
  }
}

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
