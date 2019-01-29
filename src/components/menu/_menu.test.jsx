import * as React from 'react';
import { customRender } from '../../../test/test-utils';
import Menu from '.';

it('should render without throwing an error', () => {
  const { container } = customRender(<Menu anchorEl={null} />);
  expect(container.firstChild).toMatchSnapshot();
});
