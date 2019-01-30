The Tooltip component shows a message on top of the referred element.

For more info, please refer to the <a href="https://github.com/gazpachu/sugui/tree/master/src/components/tooltip/index.jsx" target="_blank">component implementation</a>

```jsx
const Button = require('../button').default;

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
      <div ref={c => (this.ref = c)} style={{ width: '130px' }}>
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

<TooltipExample />
```
