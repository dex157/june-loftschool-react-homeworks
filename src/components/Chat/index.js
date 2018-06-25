import React, { Component } from 'react';
import './Chat.css';
import Message from '../Message';
class Chat extends Component {
  state = {
    messages: [],
    messageInput: ''
  };
  changeInputMessage = event => {
    this.setState({ messageInput: event.target.value });
  };
  sendMessageOnEnter = event => {
    const value = this.state.messageInput;
    if (event.key === 'Enter' && value !== '') {
      this.setState(state => ({
        messages: [...state.messages, { text: value }]
      }));
      this.setState({ messageInput: '' });
    }
  };
  render() {
    const messages = this.state.messages;

    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {messages.map((message, key) => (
              <Message text={message.text} key={key} />
            ))}
          </div>
        </div>
        <input
          className="input-message"
          value={this.state.messageInput}
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
        />
      </div>
    );
  }
}

export default Chat;
