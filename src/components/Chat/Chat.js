import React, { Component } from 'react';
import Message from '../Message/Message.js';
import './Chat.css';
class Chat extends Component {
  state = {
    messageInput: '',
    messages: []
  };
  handleOnChange = event => {
    this.setState({
      messageInput: event.target.value
    });
  };
  changeInputMessage = () => {
    console.log('Hello');
  };
  sendMessageOnEnter = event => {
    const newMess = this.state.messageInput;
    if (event.key === 'Enter') {
      this.setState(state => ({
        messages: [...this.state.messages, ...[{ text: newMess }]],
        messageInput: ''
      }));
    }
  };
  render() {
    return (
      <div className="chat">
        {this.state.messages.map(item => (
          <Message
            key={Object.values(item)
              .slice(0, 4)
              .join('')}
            text={item.text}
          />
        ))}
        <input
          className="input-message"
          value={this.state.messageInput}
          onChange={this.handleOnChange}
          onKeyPress={this.sendMessageOnEnter}
        />
      </div>
    );
  }
}
export default Chat;
