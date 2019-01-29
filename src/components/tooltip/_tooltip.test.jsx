import * as React from 'react';
import { customRender } from '../../../test/test-utils';
import Tooltip from '.';
import Button from '../button';

class TooltipExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: false
    };

    this.ref = null;
  }

  render() {
    return (
      <div ref={(c) => { this.ref = c; }} style={{ width: '130px' }}>
        <Button
          color="primary"
          onMouseEnter={() => this.setState({ value: true })}
          onMouseLeave={() => this.setState({ value: false })}
        >
          Show Tooltip
        </Button>
        {this.state.value ?
          <Tooltip parent={this.ref}>
            <span>This is just an example tooltip</span>
          </Tooltip>
        : null}
      </div>
    );
  }
}

it('should render without throwing an error', () => {
  const { container } = customRender(<TooltipExample />);
  expect(container.firstChild).toMatchSnapshot();
});
