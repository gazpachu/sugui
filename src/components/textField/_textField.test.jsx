import * as React from 'react';
import { customRender } from '../../../test/test-utils';
import TextField from '.';

it('should render without throwing an error', () => {
  const { container } = customRender(<TextField />);
  expect(container.firstChild).toMatchSnapshot();
});
