import * as React from 'react';
import { customRender, fireEvent, waitForElement } from '../../../test/test-utils';
import Button from '.';
import SubmitButton from './_submitButton';

it('should render without throwing an error', () => {
  const { container } = customRender(<Button>Test</Button>);
  expect(container.firstChild).toMatchSnapshot();
});

it('calls "onClick" prop on button click', () => {
  // Render new instance in every test to prevent leaking state
  const onClick = jest.fn();
  const { getByText } = customRender(<Button onClick={onClick}>Test</Button>);

  fireEvent.click(getByText(/Test/i));
  expect(onClick).toHaveBeenCalled();
});

it('shows a circular progress when passing the loading prop', async () => {
  const { getByTestId } = customRender(<SubmitButton loading>Test</SubmitButton>);
  const progress = await waitForElement(() => getByTestId('progress'));
  expect(progress).toBeInTheDocument();
});
