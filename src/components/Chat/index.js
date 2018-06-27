import React, { Component } from 'react';
import Message from 'components/Message';
import './Chat.css';

class Chat extends Component {
  state = {
    messages: [],
    messageInput: ''
  };

  changeInputMessage = event => {
    let value = event.target.value;
    this.setState(state => ({
      messageInput: value
    }));
  };

  sendMessageOnEnter = event => {
    if (event.key === 'Enter') {
      this.setState(state => ({
        messages: [...state.messages, { text: state.messageInput }],
        messageInput: ''
      }));
    }
  };

  render() {
    let id = 1;
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {this.state.messages.map(el => (
              <Message key={id++} text={el.text} />
            ))}
          </div>
        </div>
        <input
          className="input-message"
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
        />
      </div>
    );
  }
}

export default Chat;
