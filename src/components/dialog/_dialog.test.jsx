import * as React from 'react';
import { customRender } from '../../../test/test-utils';
import Dialog from '.';

it('should render without throwing an error', () => {
  const { container } = customRender(<Dialog>Test</Dialog>);
  expect(container.firstChild).toMatchSnapshot();
});

it('should hide content by default', async () => {
  const { getByText } = customRender(<Dialog><p>Test</p></Dialog>);
  expect(getByText('Test')).not.toBeVisible();
});

it('should display content if opened is set', () => {
  const { getByText } = customRender(<Dialog open><p>Test</p></Dialog>);
  expect(getByText('Test')).toBeVisible();
});

it('should display a heading', () => {
  const { getByText } = customRender(<Dialog open heading="hello"><p>Test</p></Dialog>);
  expect(getByText('hello')).toBeVisible();
});
