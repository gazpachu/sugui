import * as React from 'react';
import { customRender } from '../../../test/test-utils';
import Paper from '.';

it('should render without throwing an error', () => {
  const { container } = customRender(<Paper />);
  expect(container.firstChild).toMatchSnapshot();
});
