import React from 'react';
import './Chat.css';
import Message from '../Message/Message.js';

class Chat extends React.Component {
  state = {
    messageInput: '',
    messages: []
  };
  changeInputMessage = event => {
    this.setState({ messageInput: event.target.value });
  };
  sendMessageOnEnter = event => {
    if (event.key === 'Enter' && this.state.messageInput !== '') {
      let messages = JSON.parse(JSON.stringify(this.state.messages));
      messages.push({ text: this.state.messageInput });
      this.setState({ messages: messages });
      this.setState({ messageInput: '' });
    }
  };
  render() {
    return (
      <div className="chat">
        <input
          type="text"
          className="input-message"
          value={this.state.messageInput}
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
        />
        {this.state.messages.map(message => {
          return <Message text={message.text} />;
        })}
      </div>
    );
  }
}

export default Chat;
