import React, { Component } from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      messageInput: ''
    };
  }

  changeInputMessage = event => {
    this.setState({ messageInput: event.target.value });
  };
  sendMessageOnEnter = event => {
    if (event.key === 'Enter')
      this.setState(() => ({
        messages: [...this.state.messages, { text: this.state.messageInput }],
        messageInput: ''
      }));
  };
  render() {
    return (
      <div className="chat">
        <div>
          <input
            type="text"
            value={this.state.messageInput}
            className="input-message"
            onChange={this.changeInputMessage}
            onKeyPress={this.sendMessageOnEnter}
          />
          <div className="messages">
            {this.state.messages.map((msg, index) => (
              <Message text={msg.text} key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
