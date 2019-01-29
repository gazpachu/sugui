import * as React from 'react';
import { customRender } from '../../../test/test-utils';
import TopNav from '.';

it('should render without throwing an error', () => {
  const { container } = customRender(<TopNav />);
  expect(container.firstChild).toMatchSnapshot();
});
