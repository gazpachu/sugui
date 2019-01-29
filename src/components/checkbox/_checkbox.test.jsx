import * as React from 'react';
import { customRender, fireEvent } from '../../../test/test-utils';
import Checkbox from '.';

it('should render without throwing an error', () => {
  const { container } = customRender(<Checkbox>Test</Checkbox>);
  expect(container.firstChild).toMatchSnapshot();
});

it('calls "onChange" prop when the checked state changes', () => {
  const onChange = jest.fn();
  const { getByText } = customRender(<Checkbox onChange={onChange}>Test</Checkbox>);

  fireEvent.click(getByText(/Test/i));
  expect(onChange).toHaveBeenCalled();
});

it('should contain a text label', () => {
  const { getByText } = customRender(<Checkbox>Test</Checkbox>);
  expect(getByText(/Test/i)).toBeVisible();
});
