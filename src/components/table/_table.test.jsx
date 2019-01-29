import * as React from 'react';
import { customRender } from '../../../test/test-utils';
import Table from '.';

const columns = [
  { id: 'id', header: 'ID' },
  { id: 'make', header: 'Make' },
  { id: 'model', header: 'Model' },
  { id: 'year', header: 'Year' },
  { id: 'type', header: 'Type' },
  { id: 'price', header: 'Price' }
];

it('should render without throwing an error', () => {
  const { container } = customRender(<Table columns={columns} />);
  expect(container.firstChild).toMatchSnapshot();
});
