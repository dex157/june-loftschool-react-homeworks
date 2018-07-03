import React, { Component } from 'react';
import Message from 'components/Message';
import './Chat.css';

export default class Chat extends Component {
  state = { messageInput: '', messages: [] };
  messageList = React.createRef();

  changeInputMessage = e => {
    this.setState({
      messageInput: e.target.value
    });
  };

  sendMessageOnEnter = e => {
    if (e.key !== 'Enter') {
      return;
    }

    this.setState(
      state => ({
        messageInput: '',
        messages: [...this.state.messages, { text: this.state.messageInput }]
      }),
      this.scrollMessageList
    );
  };

  scrollMessageList() {
    if (!this.messageList.current) {
      return;
    }

    this.messageList.current.scrollTop = 99999;
  }

  render() {
    return (
      <div className="chat">
        <div className="message-list" ref={this.messageList}>
          <div className="messages">
            {this.state.messages.map((message, index) => (
              <Message text={message.text} key={index} />
            ))}
          </div>
        </div>
        <input
          type="text"
          className="input-message"
          value={this.state.messageInput}
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
        />
      </div>
    );
  }
}