import React, { Component } from 'react';
import Message from '../Message/Message.js';
import './Chat.css';

class Chat extends Component {
  state = {
    messages: [],
    messageInput: ''
  };

  changeInputMessage = event => {
    const value = event.target.value;
    this.setState(state => ({
      messageInput: value
    }));
  };

  sendMessageOnEnter = event => {
    const value = this.state.messageInput;
    if (event.key === 'Enter') {
      this.setState(state => ({
        message: state.messages.push({ text: value }),
        messageInput: ''
      }));
    }
  };
  render() {
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {this.state.messages.map((element, id) => {
              return <Message text={element.text} key={id} />;
            })}
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
}

export default Chat;
