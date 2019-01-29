import * as React from 'react';
import { customRender } from '../../../test/test-utils';
import Icon from '.';

it('should render without throwing an error', () => {
  const { container } = customRender(<Icon />);
  expect(container.firstChild).toMatchSnapshot();
});
