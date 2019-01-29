import * as React from 'react';
import { customRender } from '../../../test/test-utils';
import Avatar from '.';

it('should render without throwing an error', () => {
  const { container } = customRender(<Avatar name="Error Found" />);
  expect(container.firstChild).toMatchSnapshot();
});
