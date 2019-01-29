import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Theme from '../theme/settings';
import {
  Container,
  PageIndicator,
  ArrowButton,
  ArrowLeftIcon,
  ArrowRightIcon,
  PageSelector
} from './pagination.styles';

const propTypes = {
  /**
   * Number of pages
   */
  pageCount: PropTypes.number.isRequired,
  /**
   * Callback when the page changes
   */
  onChange: PropTypes.func,
  /**
   * Styling variants
   */
  variant: PropTypes.oneOf(['', 'table'])
};

const defaultProps = {
  onChange: null,
  variant: ''
};

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.pageCount !== this.props.pageCount) {
      this.setState({ currentPage: 1 });
    }
  }

  onPageChange(event) {
    this.setState({ currentPage: Number(event.target.value) }, () => {
      if (this.props.onChange) this.props.onChange(this.state.currentPage - 1);
    });
  }

  changePage(value) {
    const { currentPage } = this.state;

    if ((value > 0 && currentPage + value > this.props.pageCount) ||
        (value < 0 && currentPage + value < 0)) return;

    this.setState({ currentPage: currentPage + value }, () => {
      if (this.props.onChange) this.props.onChange(this.state.currentPage - 1);
    });
  }

  render() {
    const { className, pageCount, variant } = this.props;
    const { currentPage } = this.state;

    const pages = [];
    for (let i = 1; i <= pageCount; i += 1) {
      pages.push(<option key={`page-${i}`} value={i}>{i}</option>);
    }

    return (
      <Container className={className}>
        <PageIndicator>{currentPage} of {pageCount} pages</PageIndicator>
        <ArrowButton
          variant={variant}
          direction="prev"
          disabled={currentPage === 1}
          onClick={() => this.changePage(-1)}
        >
          <ArrowLeftIcon color={Theme.colors.gray} />
        </ArrowButton>
        <PageSelector value={currentPage} onChange={event => this.onPageChange(event)}>
          {pages}
        </PageSelector>
        <ArrowButton
          variant={variant}
          disabled={currentPage === pageCount}
          onClick={() => this.changePage(1)}
        >
          <ArrowRightIcon color={Theme.colors.gray} />
        </ArrowButton>
      </Container>
    );
  }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;
