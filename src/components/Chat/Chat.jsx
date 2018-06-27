import React from 'react';
import Message from '../Message';
import './Chat.css';

const KEYS = {
  ENTER: 'Enter',
  EMPTY: ''
};

class Chat extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      messages: [],
      messageInput: '',
    };

    this.changeInputMessage = this.changeInputMessage.bind (this);
    this.sendMessageOnEnter = this.sendMessageOnEnter.bind (this);
  }

  clearMessageInput () {
    this.setState ({
      messageInput: '',
    });
  }

  addMessageToState (text) {
    const messages = this.state.messages;

    messages.push ({text: text});

    this.setState ({
      messages: messages,
    });
  }

  scrollToBottom() {
    const messageList = document.querySelector('.message-list');

    setTimeout(() => {
      messageList.scrollTop = messageList.scrollHeight;
    }, 0);
  }

  changeInputMessage (event) {
    this.setState ({
      messageInput: event.target.value,
    });
  }

  sendMessageOnEnter (event) {
    if (event.key === KEYS.ENTER && this.state.messageInput !== '') {
      this.addMessageToState (this.state.messageInput);
      this.clearMessageInput ();
      this.scrollToBottom();
    }
  }

  render () {
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {this.state.messages.map ((message, idx) => (
              <Message text={message.text} key={idx} />
            ))}
          </div>
        </div>

        <input
          type="text"
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
