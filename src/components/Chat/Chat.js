import React, { Component } from 'react';
import Message from '../Message/Message.js';
import './Chat.css';
class Chat extends Component {
  state = {
    messageInput: '',
    messages: []
  };
  handleOnChange = event => {
    this.setState({
      messageInput: event.target.value
    });
    if (event.key === 'Enter') {
      this.sendMessageOnEnter();
    }
    ///[...this.state.messages, ...[1,2,3]
  };
  // changeInputMessage = () => {};
  sendMessageOnEnter = () => {
    const newMess = this.state.messageInput;
    // this.changeInputMessage();
    this.setState(state => ({
      messages: [...this.state.messages, ...[newMess]],
      messageInput: ''
    }));
  };
  ///   [{text: значение_из_messageInput}]
  render() {
    return (
      <div className="chat">
        {this.state.messages.map(item => (
          <Message
            key={Object.values(item)
              .slice(0, 4)
              .join('')}
            text={item}
          />
        ))}
        <input
          className="input-message"
          value={this.state.messageInput}
          onChange={this.handleOnChange}
          onKeyPress={this.handleOnChange}
        />
      </div>
    );
  }
}
export default Chat;
