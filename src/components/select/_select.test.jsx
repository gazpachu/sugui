import * as React from 'react';
import { customRender } from '../../../test/test-utils';
import Select from '.';

it('should render without throwing an error', () => {
  const { container } = customRender(<Select items={[{ val: 1, label: 'one' }, { val: 2, label: 'two', selected: true }, { val: 3, label: 'three' }]} />);
  expect(container.firstChild).toMatchSnapshot();
});
