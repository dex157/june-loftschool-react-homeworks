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
    if (event.charCode === 13) {
      let self = this;

      this.setState(prevState => ({
        messages: [...prevState.messages, { text: prevState.messageInput }],
        messageInput: ''
      }));

      setTimeout(function() {
        console.log(self.state);
      }, 250);

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
