import * as React from 'react';
import { customRender } from '../../../test/test-utils';
import Badge from '.';

it('should render without throwing an error', () => {
  const { container } = customRender(<Badge content={2}>Test</Badge>);
  expect(container.firstChild).toMatchSnapshot();
});
