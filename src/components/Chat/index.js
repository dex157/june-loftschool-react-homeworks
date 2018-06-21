import React from 'react';
import Message from '../Message';
class Chat extends React.Component {
  state = {
    messageInput: ''
  }
  eventChange = (event) => {
    this.setState(state => (
      {messageInput: event.target.value}
    ))
  }
  eventKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.setState(state => (
        {messageInput: event.target.value}
      ))
    }
  }
  render() {
    return  (
      <div>
        <Message text={this.state.messageInput} />
        <input value={this.state.messageInput} onChange={this.eventChange()} onKeyPress={this.eventKeyPress()}/>
      </div>  
    )
  }
  
}
export default Chat;
