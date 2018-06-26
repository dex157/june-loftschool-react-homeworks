import React, { Component } from 'react';
import Message from '../Message/Message';

export default class Chat extends Component {
  state = {
    messages: [],
    messageInput: ''
  };

  changeInputMessage = event => {
    this.setState({ messageInput: event.target.value });
  };

  sendMessageOnEnter = event => {
    if (event.key === 'Enter') {
      this.setState({ messages: [...this.state.messages, this.state.messageInput ] });
      this.setState({ messageInput:""});
    }
  };

  render() {
    const { messages } = this.state;

    return (
      <div>
        <div className="chat">

        </div>
        <input
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
          className="input-message"
          value={this.state.messageInput}
        />

        <Message text={messages} />
      </div>
    );
  }
}
