import React from 'react';
import Message from './Message';
import './Chat/Chat.css';

class Chat extends React.Component {
  state = {
    messages: [],
    messageInput: ''
  };

  render() {
    return (
      <div>
        <div className="chat">
          <div className="message-list">
            <div className="messages">
              {this.state.messages.map((message, key) => (
                <Message text={message} key={key} />
              ))}
            </div>
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

  changeInputMessage = event => {
    this.setState({ messageInput: event.target.value });
  };

  sendMessageOnEnter = event => {
    if (event.key === 'Enter') {
      this.setState(() => ({
        messages: [...this.state.messages, this.state.messageInput],
        messageInput: ''
      }));
    }
  };
}

export default Chat;
