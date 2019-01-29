import * as React from 'react';
import { customRender } from '../../../test/test-utils';
import Radiobutton from '.';

it('should render without throwing an error', () => {
  const { container } = customRender(<Radiobutton>Test</Radiobutton>);
  expect(container.firstChild).toMatchSnapshot();
});
