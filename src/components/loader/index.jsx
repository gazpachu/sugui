import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../../icons/close';
import {
  LoaderContainer,
  LoaderWrapper,
  LoaderCircle,
  LoaderContent,
  LoaderLineMask,
  LoaderLine,
  Content,
  StyledCloseButton
} from './loader.styles';

const propTypes = {
  /**
   * Determines if the loader is showing or not
   */
  isLoading: PropTypes.bool.isRequired,
  /**
   * Without space for the top navigation
   */
  noTopNav: PropTypes.bool,
  /**
   * Separation (in px) from the top of the screen
   */
  topOffset: PropTypes.number,
  /**
   * A escape hatch for demo purposes
   */
  onClose: PropTypes.func
};

const defaultProps = {
  noTopNav: false,
  topOffset: 60,
  onClose: null
};

const Loader = (props) => {
  const {
    isLoading,
    noTopNav,
    topOffset,
    onClose
  } = props;

  return (
    <LoaderContainer isLoading={isLoading} noTopNav={noTopNav} topOffset={topOffset} data-testid="loader">
      <LoaderWrapper>
        <LoaderCircle />
        <LoaderLineMask>
          <LoaderLine />
        </LoaderLineMask>
        <LoaderContent>
          <Content>
            Loading...
          </Content>
        </LoaderContent>
      </LoaderWrapper>
      <StyledCloseButton onClick={onClose}>
        <CloseIcon color="white" />
      </StyledCloseButton>
    </LoaderContainer>
  );
};

Loader.propTypes = propTypes;
Loader.defaultProps = defaultProps;

export default Loader;
