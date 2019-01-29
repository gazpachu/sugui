import React, { PureComponent, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import merge from 'lodash-es/merge';
import theme from './settings';
import Global from './global';
import helpers from './helpers';

class Theme extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      theme
    };
  }

  componentDidMount() {
    this.onResize(helpers.isDesktop);

    helpers.onResize((isDesktop) => {
      this.onResize(isDesktop);
    }, 500);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.appTheme) {
      this.setState(prevState => ({
        ...prevState,
        theme: merge(prevState.theme, newProps.appTheme)
      }));
    }
  }

  onResize(isDesktop) {
    this.setState(prevState => ({
      theme: {
        ...prevState.theme,
        isDesktop
      }
    }));
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Fragment>
          <Global suppressMultiMountWarning />
          {this.props.children}
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default Theme;
