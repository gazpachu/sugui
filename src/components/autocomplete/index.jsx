import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash-es/debounce';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { slugify } from '../theme/helpers';
import { SearchIcon } from '../../icons';
import TextField from '../textField';
import {
  SearchContainer,
  Info,
  Bars,
  Bar,
  SuggestionsContainer,
  StyledCircularProgress,
  ListItem
} from './autocomplete.styles';

const propTypes = {
  /**
   * Data to feed the autocomplete
   */
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string
  })),
  /**
   * Color for the borders, text and icon
   */
  color: PropTypes.string,
  /**
   * Callback after an item selection is made
   */
  onSelect: PropTypes.func,
  /**
   * placeholder text for the input
   */
  placeholder: PropTypes.string,
  /**
   * Max number of results to show
   */
  results: PropTypes.number,
  /**
   * A promise with the search results, i.e. an Axios API response
   */
  search: PropTypes.func,
  /**
   * Defines the logic to decide which suggestions are displayed
   */
  validateSuggestion: PropTypes.func,
  /**
   * Sets the focus in the input
   */
  autoFocus: PropTypes.bool
};

const defaultProps = {
  data: null,
  color: 'mineShaft',
  onSelect: () => {},
  placeholder: '',
  results: 5,
  search: () => {},
  validateSuggestion: () => true,
  autoFocus: false
};

function renderSuggestion(suggestion, { query }) {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <ListItem>
      <div>
        { // eslint-disable-next-line
          parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 800 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </ListItem>
  );
}

function renderSuggestionsContainer(options) {
  const { containerProps, children } = options;

  return (
    <div {...containerProps}>
      <SuggestionsContainer>
        {children}
      </SuggestionsContainer>
    </div>
  );
}

class AutoComplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      searching: false,
      suggestions: [],
      remaining: 3
    };

    this.debouncedLoadSuggestions = debounce(this.loadSuggestions, 500);
  }

  getSuggestions(payload) {
    const inputValue = payload.trim().toLowerCase();
    let count = 0;

    return !this.props.data
      ? [{ label: 'No results found' }]
      : this.props.data.filter((suggestion) => {
        const keep = count < this.props.results && this.props.validateSuggestion(suggestion, inputValue);

        if (keep) {
          count += 1;
        }

        return keep;
      });
  }

  loadSuggestions(value) {
    if (value.length > 2) {
      this.setState({ searching: true });
      const promise = this.props.search(value);

      if (promise) {
        promise.then(() => {
          this.setState({
            suggestions: this.getSuggestions(value),
            searching: false
          });
        });
      } else {
        this.setState({
          suggestions: this.getSuggestions(value),
          searching: false
        });
      }
    } else {
      this.setState({ suggestions: [] });
    }
  }

  renderInput(inputProps) {
    return (
      <Fragment>
        <TextField
          color={this.props.color}
          icon={<SearchIcon />}
          iconPos="left"
          darkBg
          inputProps={inputProps}
        />
        <Info color={this.props.color}>Type 3 letters or more</Info>
        <Bars>
          <Bar active={this.state.remaining <= 2} color={this.props.color} />
          <Bar active={this.state.remaining <= 1} color={this.props.color} />
          <Bar active={this.state.remaining === 0} color={this.props.color} />
        </Bars>
      </Fragment>
    );
  }

  render() {
    const {
      color,
      autoFocus,
      disabled,
      placeholder
    } = this.props;
    const { searching } = this.state;

    return (
      <SearchContainer>
        {searching ? <StyledCircularProgress color={color} /> : null}
        <Autosuggest
          renderInputComponent={inputProps => this.renderInput(inputProps)}
          highlightFirstSuggestion
          suggestions={this.state.suggestions || []}
          onSuggestionsFetchRequested={({ value }) => this.debouncedLoadSuggestions(value)}
          onSuggestionsClearRequested={() => this.setState({ suggestions: [] })}
          renderSuggestionsContainer={renderSuggestionsContainer}
          getSuggestionValue={suggestion => suggestion.label}
          renderSuggestion={renderSuggestion}
          inputProps={{
            disabled,
            autoFocus,
            placeholder,
            value: this.state.value,
            color,
            onChange: (event, { newValue }) => {
              if (newValue.length < 4) {
                this.setState({ remaining: 3 - newValue.length });
              }
              if (newValue === '') this.props.onSelect(slugify(newValue));
              this.setState({ value: newValue });
            }
          }}
          onSuggestionSelected={(event, { suggestion }) => this.props.onSelect(suggestion)}
        />
      </SearchContainer>
    );
  }
}

AutoComplete.propTypes = propTypes;
AutoComplete.defaultProps = defaultProps;

export default AutoComplete;
