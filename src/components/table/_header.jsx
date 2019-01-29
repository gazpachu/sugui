import React, { Component } from 'react';
import Theme from '../theme/settings';
import { Th, HeadingButton, StyledArrowIcon } from './table.styles';

class TableHeader extends Component {
  static sortByAttributes(options) {
    if (!options.data) return;
    const { data, activeSortField, reverse } = options;
    const sorted = data.sort((a, b) => {
      const valueA = typeof a[activeSortField] === 'string'
        ? a[activeSortField].toUpperCase()
        : a[activeSortField];
      const valueB = typeof b[activeSortField] === 'string'
        ? b[activeSortField].toUpperCase()
        : b[activeSortField];

      if (valueA < valueB) {
        return -1;
      } else if (valueA > valueB) {
        return 1;
      }
      return 0;
    });

    if (!reverse) {
      sorted.reverse();
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      activeSortField: '',
      reverse: false,
      hoverField: null
    };

    this.sortBy = this.sortBy.bind(this);
  }

  sortBy(type) {
    const { data, setFilteredData } = this.props;
    const { reverse, activeSortField } = this.state;
    this.setState({
      activeSortField: type,
      reverse: !reverse
    }, () => {
      TableHeader.sortByAttributes({
        activeSortField,
        data,
        reverse
      });

      setFilteredData(data);
    });
  }

  render() {
    const {
      columns
    } = this.props;
    const {
      activeSortField, reverse, hoverField
    } = this.state;

    return (
      <thead>
        {columns && columns.length > 0 ?
          <tr>
            {columns.map(
              column => (
                <Th key={column.id}>
                  <HeadingButton
                    onClick={() => {
                      this.sortBy(column.id);
                    }}
                    onMouseEnter={() => this.setState({ hoverField: column.id })}
                    onMouseLeave={() => this.setState({ hoverField: null })}
                  >
                    {column.header}
                  </HeadingButton>
                  <StyledArrowIcon
                    color={Theme.colors.abbey}
                    active={(column.id === activeSortField) || (column.id === hoverField) ? true : undefined}
                    reversed={reverse}
                  />
                </Th>
              ),
              this
            )}
          </tr>
        : null}
      </thead>
    );
  }
}

export default TableHeader;
