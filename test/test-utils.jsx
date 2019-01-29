import React from 'react';
import { render } from 'react-testing-library';
import { ThemeProvider } from 'styled-components';
import theme from '../src/components/theme/settings';

const customRender = (node, ...options) => render(
  <ThemeProvider theme={theme}>
    {node}
  </ThemeProvider>,
  ...options,
);

// re-export everything
export * from 'react-testing-library';

// override render method
export { customRender };
