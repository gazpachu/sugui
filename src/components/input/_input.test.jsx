import * as React from 'react';
import { customRender, fireEvent } from '../../../test/test-utils';
import Input from '.';

it('should render without throwing an error', () => {
  const { container } = customRender(<Input />);
  expect(container.firstChild).toMatchSnapshot();
});

it('Should allow the user to enter data', async () => {
  const { getByPlaceholderText } = customRender(<Input inputProps={{ placeholder: 'test' }} />);
  const inputNode = getByPlaceholderText('test');

  fireEvent.change(inputNode, { target: { value: 'lion' } });
  expect(inputNode.value).toBe('lion');
});

it('calls "onChange" prop when the input value changes', () => {
  const onChange = jest.fn();
  const { getByPlaceholderText } = customRender(<Input onChange={onChange} inputProps={{ placeholder: 'test' }} />);
  const inputNode = getByPlaceholderText('test');

  fireEvent.change(inputNode, { target: { value: 'lion' } });
  expect(onChange).toHaveBeenCalled();
});
