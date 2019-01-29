The notification component is used to display messages to the user. I.e. after an API call, we might want to show a message with the error or returned from the server or a success message. The error hides automatically after clicking anywhere. The automatic hiding was disabled for UX reasons, as some users might not have enough time to read longer messages.

For more info, please refer to the <a href="https://github.com/gazpachu/sugui/src/components/notification/index.jsx" target="_blank">component implementation</a>

```jsx
initialState = {
  notification: {
    type: 'info',
    message: ''
  },
  notification1: {
    type: 'success',
    message: 'This is a success message'
  },
  notification2: {
    type: 'error',
    message: 'This is an error message with more text'
  },
  notification3: {
    type: 'warning',
    message: 'This is a warning message with loger text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac arcu id ipsum molestie semper id a nisl. Etiam nec justo purus. In hac habitasse platea dictumst. Morbi vitae iaculis leo. Maecenas sit amet lorem ut odio vestibulum tristique in vehicula turpis. Aliquam erat volutpat. In mi enim, suscipit in suscipit vel, placerat vitae elit. Vestibulum in auctor mi. Praesent quis odio in libero lacinia fermentum. Integer ipsum ligula, tempor eget aliquam feugiat, tincidunt at nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum imperdiet sit amet ex in ultricies.'
  },
  notification4: {
    type: 'info',
    message: 'This is an information message'
  }
}
;<div>
  <ul className="items">
    <li><Button onClick={() => setState({ notification: state.notification1 })}>Success</Button></li>
    <li><Button onClick={() => setState({ notification: state.notification2 })}>Error</Button></li>
    <li><Button onClick={() => setState({ notification: state.notification3 })}>Warning</Button></li>
    <li><Button onClick={() => setState({ notification: state.notification4 })}>Info</Button></li>
  </ul>
  <Notification notification={state.notification} />
</div>
```
