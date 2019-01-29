import * as React from 'react';
import { customRender } from '../../../test/test-utils';
import Pagination from '.';

it('should render without throwing an error', () => {
  const { container } = customRender(<Pagination pageCount={5} />);
  expect(container.firstChild).toMatchSnapshot();
});
