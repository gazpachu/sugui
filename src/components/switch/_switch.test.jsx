import * as React from 'react';
import { customRender } from '../../../test/test-utils';
import Switch from '.';

it('should render without throwing an error', () => {
  const { container } = customRender(<Switch />);
  expect(container.firstChild).toMatchSnapshot();
});
