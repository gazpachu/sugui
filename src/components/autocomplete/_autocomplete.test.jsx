import * as React from 'react';
import { customRender, fireEvent } from '../../../test/test-utils';
import AutoComplete from '.';

const data = [{
  id: 'peter.pan@domain.com',
  label: 'Peter Pan'
}, {
  id: 'ai.weiwei@domain.com',
  label: 'Ai Weiwei'
}, {
  id: 'rafael.nadal@domain.com',
  label: 'Rafael Nadal'
}];

it('should render without throwing an error', () => {
  const { container } = customRender(<AutoComplete />);
  expect(container.firstChild).toMatchSnapshot();
});

it('Should allow the user to type a word to search for', async () => {
  const { getByPlaceholderText } = customRender(<AutoComplete placeholder="test" />);
  const inputNode = getByPlaceholderText('test');

  fireEvent.change(inputNode, { target: { value: 'lion' } });
  expect(inputNode.value).toBe('lion');
});

// it('calls "onSelect" prop when an item is selected', async () => {
//   const onSelect = jest.fn();
//   const { getByPlaceholderText, container } = customRender(<AutoComplete placeholder="test" data={data} onSelect={onSelect} />);
//   const inputNode = getByPlaceholderText('test');
//
//   // This will write `pete` in the input field
//   fireEvent.change(inputNode, { target: { value: 'pete' } });
//
//   const items = await waitForElement(() => {
//     container.querySelectorAll('.react-autosuggest__suggestion');
//   });
//
//   // TODO pending to fix timeout searching for the suggestion item...
//   // https://spectrum.chat/react-testing-library/help?thread=68e5c2dc-21fa-4b8d-9c6d-3bf2c0613c4a
//   // https://github.com/moroshko/react-autosuggest/issues/591
//   console.log(items);
//
//   // Fire the click on the first item
//   // fireEvent.click(items[0]);
//   expect(onSelect).toHaveBeenCalled();
// });
