import * as React from 'react';
import { customRender } from '../../../test/test-utils';
import Theme from '.';

it('should render without throwing an error', () => {
  const { container } = customRender(<Theme />);
  expect(container.firstChild).toMatchSnapshot();
});
