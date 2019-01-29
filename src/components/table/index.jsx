import React, { Component } from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { createFilter } from 'react-search-input';
import SearchIcon from '../../icons/search';
import TableHeader from './_header';
import TableBody from './_body';
import {
  Container,
  Header,
  TableContainer,
  TableWrapper,
  SearchContainer,
  PaginationContainer,
  PaginationInfo,
  StyledPagination,
  RowsSelector
} from './table.styles';

const propTypes = {
  /**
   * The data to be displayed in the table body. Each item needs an ID!
   */
  columnData: PropTypes.arrayOf(PropTypes.any),
  /**
   * The column IDs and labels
   */
  columns: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    header: PropTypes.string
  })).isRequired,
  /**
   * The column IDs to filter the data
   */
  filters: PropTypes.arrayOf(PropTypes.string),
  /**
   * Hides the search functionality
   */
  hideSearch: PropTypes.bool,
  /**
   * Hides the sorting functionality
   */
  hideSorting: PropTypes.bool,
  /**
   * CSS styles
   */
  className: PropTypes.string,
  /**
   * Amount of items per page
   */
  limit: PropTypes.number,
  /**
   * Elements to be displayed on top of the table
   */
  children: PropTypes.node,
  /**
   * Hook for customising the rendering of each cell
   */
  onRenderCell: PropTypes.func,
  /**
   * Avoids rendering cells for the provided IDs in the dataset
   */
  skipIDs: PropTypes.bool
};

const defaultProps = {
  columnData: null,
  filters: null,
  hideSearch: false,
  hideSorting: false,
  className: null,
  limit: 10,
  children: null,
  onRenderCell: null,
  skipIDs: false
};

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      filteredData: [],
      limit: this.props.limit,
      data: this.props.columnData ? this.props.columnData.slice(0, this.props.limit) : null,
      currentPage: 0
    };

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.columnData) {
      this.setState({ data: newProps.columnData.slice(0, this.state.limit) });
    }
  }

  handleSearchInput(term) {
    const {
      columnData, filters
    } = this.props;

    this.setState({
      searchTerm: term,
      filteredData: columnData.filter(createFilter(term, filters))
    }, () => {
      this.setState({ data: this.state.filteredData.slice(0, this.state.limit) });
    });
  }

  handlePageClick(currentPage) {
    const offset = Math.ceil(currentPage * this.state.limit);

    const rowData = this.state.searchTerm ? this.state.filteredData : this.props.columnData;

    this.setState({ currentPage, data: rowData.slice(offset, offset + this.state.limit) });
  }

  render() {
    const {
      columnData,
      hideSearch,
      hideSorting,
      columns,
      className,
      children,
      onRenderCell,
      skipIDs,
      theme
    } = this.props;
    const {
      data,
      limit,
      currentPage,
      searchTerm,
      filteredData
    } = this.state;

    const offsets = [];
    let total = null;
    let from = null;
    let to = null;

    if (columnData) {
      for (let i = 10; i <= columnData.length; i += 10) {
        offsets.push(<option key={`offset-${i}`} value={i}>{i}</option>);
      }

      total = searchTerm ? filteredData.length : columnData.length;
      from = ((currentPage + 1) * limit) - limit;
      to = ((currentPage + 1) * limit) < total ? ((currentPage + 1) * limit) : total;
    }

    return (
      <Container className={className}>
        <Header>
          {!hideSearch && <SearchContainer
            inputProps={{
              placeholder: 'Search the entire table...'
            }}
            icon={<SearchIcon />}
            onChange={e => this.handleSearchInput(e.target.value)}
          />}
          {children}
        </Header>
        <TableWrapper>
          <TableContainer className={className}>
            {theme.isDesktop && <TableHeader hideSorting={hideSorting} columns={columns} data={data} setFilteredData={() => this.setState({ filteredData })} />}
            <TableBody data={data} onRenderCell={onRenderCell} skipIDs={skipIDs} isDesktop={theme.isDesktop} columns={columns} />
          </TableContainer>
          {(searchTerm && filteredData && filteredData.length > 10) || (!searchTerm && columnData && columnData.length > 10) ?
            <PaginationContainer>
              {theme.isDesktop &&
                <PaginationInfo>
                  Rows per page:
                  <RowsSelector
                    value={limit}
                    onChange={event => this.setState({ currentPage: 0, limit: event.target.value }, () => this.handlePageClick(this.state.currentPage))}
                  >
                    {offsets}
                  </RowsSelector>
                  {from} - {to} of {total}
                </PaginationInfo>}
              <StyledPagination
                variant="table"
                pageCount={searchTerm ? Math.ceil(filteredData.length / limit) : Math.ceil(columnData.length / limit)}
                onChange={this.handlePageClick}
              />
            </PaginationContainer>
          : null}
        </TableWrapper>
      </Container>
    );
  }
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default withTheme(Table);
