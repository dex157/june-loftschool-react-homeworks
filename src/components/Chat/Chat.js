import React, { Component } from 'react';
import Message from '../Message/Message';
import './Chat.css';

class Chat extends Component {
  state = { messageInput: '', messages: [] };

  changeInputMessage = event => {
    let inputValue = event.target.value;
    this.setState({ messageInput: inputValue });
  };

  sendMessageOnEnter = event => {
    if (event.key === 'Enter') {
      this.setState(prevState => ({
        messages: [...prevState.messages, { text: prevState.messageInput }],
        messageInput: ''
      }));
      event.target.value = '';
    }
  };

  render() {
    return (
      <div className="chat">
        <input
          className="input-message"
          onKeyPress={this.sendMessageOnEnter}
          onChange={this.changeInputMessage}
        />
        <br />
        <br />
        {this.state.messages.map((message, index) => {
          return (
            <Message key={message.text + '_' + index} text={message.text} />
          );
        })}
      </div>
    );
  }
}

export default Chat;
