import * as React from 'react';
import { customRender } from '../../../test/test-utils';
import Collapse from '.';

it('should render without throwing an error', () => {
  const { container } = customRender(<Collapse>Test</Collapse>);
  expect(container.firstChild).toMatchSnapshot();
});

it('should hide content by default', async () => {
  const { getByTestId } = customRender(<Collapse><p>Test</p></Collapse>);
  expect(getByTestId('collapse')).not.toBeVisible();
});

it('should display content if opened is set', () => {
  const { getByTestId } = customRender(<Collapse expanded><p>Test</p></Collapse>);
  expect(getByTestId('collapse')).toBeVisible();
});
