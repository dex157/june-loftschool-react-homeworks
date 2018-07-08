import React, { Component } from 'react';
import Message from '../Message';
import './Chat.css';

export default class Chat extends Component {
  state = {
    messages: [],
    messageInput: ''
  };

  render() {
    const { messages, messageInput } = this.state;

    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {messages.map(({ text }, index) => (
              <Message key={index} text={text} />
            ))}
          </div>
        </div>
        <input
          className="input-message"
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
          value={messageInput}
        />
      </div>
    );
  }

  changeInputMessage = event => {
    this.setState({
      messageInput: event.target.value
    });
  };

  sendMessageOnEnter = event => {
    if (event.key === 'Enter' && this.state.messageInput) {
      this.setState(state => ({
        messages: [...state.messages, { text: state.messageInput }],
        messageInput: ''
      }));
    }
  };
}
