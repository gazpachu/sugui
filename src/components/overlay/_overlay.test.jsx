import * as React from 'react';
import { customRender } from '../../../test/test-utils';
import Overlay from '.';

it('should render without throwing an error', () => {
  const { container } = customRender(<Overlay />);
  expect(container.firstChild).toMatchSnapshot();
});
