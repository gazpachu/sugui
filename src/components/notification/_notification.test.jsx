import * as React from 'react';
import { customRender } from '../../../test/test-utils';
import Notification from '.';

it('should render without throwing an error', () => {
  const { container } = customRender(<Notification notification={{ type: 'info', message: '' }} />);
  expect(container.firstChild).toMatchSnapshot();
});
