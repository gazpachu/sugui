import * as React from 'react';
import { customRender } from '../../../test/test-utils';
import Tabs from '.';

it('should render without throwing an error', () => {
  const { container } = customRender(<Tabs />);
  expect(container.firstChild).toMatchSnapshot();
});
