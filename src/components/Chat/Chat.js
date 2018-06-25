import React from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends React.Component {
  state = {
    messages: [],
    messageInput: ''
  };

  componentDidUpdate() {
    let objDiv = document.querySelector('.message-list');
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  changeInputMessage = event =>
    this.setState({
      messageInput: event.target.value
    });

  sendMessageOnEnter = event => {
    if (event.key === 'Enter') {
      this.setState({
        messages: [...this.state.messages, { text: this.state.messageInput }]
      });
      this.setState({
        messageInput: ''
      });
    }
  };

  render() {
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {this.state.messages.map((item, index) => (
              <Message text={item.text} key={index} />
            ))}
          </div>
        </div>
        <input
          className="input-message"
          onChange={this.changeInputMessage}
          value={this.state.messageInput}
          onKeyPress={this.sendMessageOnEnter}
        />
      </div>
    );
  }
}

export default Chat;
