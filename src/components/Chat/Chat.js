import React, { Component } from 'react';
import Message from 'components/Message';
import 'components/Chat/Chat.css';

export default class Chat extends Component {
  state = {
    messages: [],
    messageInput: ''
  };

  changeInputMessage = event => {
    const inputValue = event.target.value;
    this.setState(state => ({
      messageInput: inputValue
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
    const arrMessages = this.state.messages;
    return (
      <div className={'chat'}>
        <div className={'message-list'}>
          <ul className={'messages'}>
            {arrMessages.map((message, index) => {
              return <Message key={index} text={message.text} />;
            })}
          </ul>
        </div>
        <input
          className={'input-message'}
          value={this.state.messageInput}
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
        />
      </div>
    );
  }
}
