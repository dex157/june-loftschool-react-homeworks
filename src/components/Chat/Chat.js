import React, { Component } from 'react';
import Message from '../Message';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      messageInput: ''
    };
  }

  changeInputMessage(e) {
    this.setState({
      messageInput: e.target.value
    });
  }

  sendMessageOnEnter() {
    this.setState(
      {
        messages: this.state.messages.concat({ text: this.state.messageInput }),
        messageInput: ''
      }
    );
  }

  render() {
    return (
      <div className="chat">
        <input
          type="text"
          className="input-message"
          value={this.state.messageInput}
          onKeyPress={e => {
            e.key !== 'Enter' ? null : this.sendMessageOnEnter();
          }}
          onChange={e => {
            this.changeInputMessage(e);
          }}
        />

        {this.state.messages.map((message, index) => {
          return <Message key={index} text={message.text} />;
        })}
      </div>
    );
  }
}

export default Chat;
