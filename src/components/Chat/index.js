import React, { Component } from 'react';
import './Chat.css';

import Message from '../Message';

export default class Chat extends Component {
  state = { messages: [], messageInput: '' };

  render() {
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {this.state.messages.map((message, i) => (
              <Message text={message.text} key={i} />
            ))}
          </div>
        </div>
        <input
          className="input-message"
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
          value={this.state.messageInput}
        />
      </div>
    );
  }

  changeInputMessage = e => {
    this.setState({ messageInput: e.target.value });
  };

  sendMessageOnEnter = e => {
    if (e.key === 'Enter') {
      this.setState(() => ({
        messages: [...this.state.messages, { text: this.state.messageInput }],
        messageInput: ''
      }));
    }
  };
}
