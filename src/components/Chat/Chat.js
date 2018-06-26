import React, { Component } from 'react';
import Message from '../Message/Message.js';
import './Chat.css';

export default class Chat extends Component {
  state = {
    messages: [],
    messageInput: ''
  };

  render() {
    console.log(this.state);
    return (
      <div className="chat">
        {this.state.messages.map((element, id) => {
          return <Message text={element.text} key={id} />;
        })}
        <input
          className="input-message"
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
          value={this.state.messageInput}
        />
      </div>
    );
  }

  changeInputMessage = event => {
    const messageValue = event.target.value;

    this.setState(state => ({ messageInput: messageValue }));
  };

  sendMessageOnEnter = event => {
    const messageValue = this.state.messageInput;

    if (event.key === 'Enter') {
      this.setState(state => ({
        message: state.messages.push({ text: messageValue }),
        messageInput: ''
      }));
    }
  };
}
