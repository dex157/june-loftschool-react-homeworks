import React, { Component } from "react";
import Message from "../Message";
import "./Chat.css";

export default class Chat extends Component {
  state = {
    messages: [],
    messageInput: ""
  };

  render() {
    const messages = this.state.messages.map(message =>
      <Message
        text={message.text}
      />);

    return <div className="chat">
      <div className="message-list">
        <div className="messages">
          {messages}
        </div>
      </div>
      <input className="input-message"
             value={this.state.messageInput}
             onChange={this.changeInputMessage}
             onKeyPress={this.sendMessageOnEnter}
      />
    </div>;
  }

  changeInputMessage = event => {
    this.setState({
      messageInput: event.target.value
    });
  };

  sendMessageOnEnter = event => {
    if (event.key !== "Enter" || !this.state.messageInput) {
      return;
    }

    this.setState((prevState, props) => ({
      messages: [...prevState.messages, { "text": prevState.messageInput }],
      messageInput: ""
    }));
  };
}
