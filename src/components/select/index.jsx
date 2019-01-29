import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '../textField';
import { SelectWrapper, SuggestionsContainer, List, Icon, ListItem } from './select.styles';

const propTypes = {
  /**
   * The array of options for the select
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    val: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired,
    selected: PropTypes.bool
  })).isRequired,
  /**
   * Border and icon color
   */
  color: PropTypes.string,
  /**
   * The size of the input
   */
  size: PropTypes.oneOf(['default', 'small']),
  /**
   * Icon component to display
   */
  icon: PropTypes.node,
  /**
   * Icon's position in the input
   */
  iconPos: PropTypes.string,
  /**
   * Text to display in the top left side
   */
  label: PropTypes.string,
  /**
   * Text to display in the bottom left side
   */
  assistiveText: PropTypes.string,
  /**
   * Indicates if a selection is required
   */
  inputProps: PropTypes.shape({
    type: PropTypes.string,
    value: PropTypes.any
  }),
  /**
   * Validation style. True is valid. False is invalid
   */
  isValid: PropTypes.bool,
  /**
   * Overrides the default color for text values
   */
  darkBg: PropTypes.bool,
  /**
   * CSS styles
   */
  className: PropTypes.string,
  /**
   * What happens when the selected item changes
   */
  onChange: PropTypes.func
};

const defaultProps = {
  color: null,
  size: 'default',
  label: null,
  icon: null,
  iconPos: null,
  assistiveText: null,
  inputProps: null,
  isValid: null,
  darkBg: false,
  className: null,
  onChange: null
};

class Select extends Component {
  constructor(props) {
    super(props);

    let selected = null;
    if (this.props.items) {
      selected = this.props.items.find(item => item.selected);
    }

    this.state = {
      opened: false,
      selected
    };

    this.wrapperRef = null;
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  onClick() {
    this.setState({ opened: !this.state.opened });
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  onChange(item) {
    if (this.props.onChange) this.props.onChange(item);
    this.setState({ selected: item, opened: false });
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ opened: false });
    }

    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  render() {
    const { opened, selected } = this.state;
    const {
      items,
      color,
      size,
      label,
      icon,
      iconPos,
      assistiveText,
      isValid,
      darkBg,
      className,
      inputProps
    } = this.props;

    const newInputProps = { ...inputProps, readOnly: true, value: selected ? selected.label : '' };

    return (
      <SelectWrapper ref={(c) => { this.wrapperRef = c; }} className={className}>
        <TextField
          label={label}
          color={color}
          size={size}
          onClick={() => this.onClick()}
          assistiveText={assistiveText}
          icon={icon}
          iconPos={iconPos}
          isValid={isValid}
          darkBg={darkBg}
          inputProps={newInputProps}
        />
        <Icon open={opened} color={color} label={label} />
        <SuggestionsContainer open={opened}>
          <List hasScroll={items.length > 4 ? true : undefined}>
            {items.map(item => (
              <ListItem key={item.val} onClick={() => { this.onChange(item); }}>
                {item.label}
              </ListItem>
            ))}
          </List>
        </SuggestionsContainer>
      </SelectWrapper>
    );
  }
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
