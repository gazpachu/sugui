import * as React from 'react';
import { customRender } from '../../../test/test-utils';
import SideNav from '.';

it('should render without throwing an error', () => {
  const { container } = customRender(<SideNav />);
  expect(container.firstChild).toMatchSnapshot();
});
