import * as React from 'react';
import { customRender, fireEvent } from '../../../test/test-utils';
import Accordion from '.';

it('should render without throwing an error', () => {
  const { container } = customRender(<Accordion>Test</Accordion>);
  expect(container.firstChild).toMatchSnapshot();
});

it('should hide content by default', () => {
  const { getByText } = customRender(<Accordion>Test</Accordion>);
  expect(getByText(/Test/i)).not.toBeVisible();
});

it('should display content if opened by default is set', () => {
  const { getByText } = customRender(<Accordion openByDefault>Test</Accordion>);
  expect(getByText(/Test/i)).toBeVisible();
});

it('calls "onChange" prop when the opened state changes', () => {
  const onChange = jest.fn();
  const { getByText } = customRender(<Accordion title="title" onChange={onChange}>Test</Accordion>);

  fireEvent.click(getByText(/title/i));
  expect(onChange).toHaveBeenCalled();
});
