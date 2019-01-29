import * as React from 'react';
import { customRender } from '../../../test/test-utils';
import CircularProgress from '.';

it('should render without throwing an error', () => {
  const { container } = customRender(<CircularProgress />);
  expect(container.firstChild).toMatchSnapshot();
});

it('displays a text label', () => {
  const { getByText } = customRender(<CircularProgress label="Test" />);
  expect(getByText(/Test/i)).toBeVisible();
});
