import * as React from 'react';
import { customRender } from '../../../test/test-utils';
import Loader from '.';

it('should render without throwing an error', () => {
  const { container } = customRender(<Loader isLoading={false} />);
  expect(container.firstChild).toMatchSnapshot();
});

it('should be visible when loading prop is set to true', () => {
  const { getByTestId } = customRender(<Loader isLoading />);
  expect(getByTestId('loader')).toBeVisible();
});
