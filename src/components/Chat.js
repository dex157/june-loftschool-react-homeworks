import React, { Component } from "react";
import Message from "./Message/Message";
import "./Chat/Chat.css";

class Chat extends Component {

  state = { messageInput: "", messages: [] };

  handleKeyPress = (event) => {
    if (event.charCode === 13) {
      this.sendMessageOnEnter();
      event.target.value = "";
    }
  };

  handleChange = (event) => {
    this.changeInputMessage(event.target.value);
  };

  sendMessageOnEnter() {

    var self = this;

    this.setState(prevState => ({
      messages: [...prevState.messages, { text: prevState.messageInput }],
      messageInput: ""
    }));

    setTimeout(function() {
      console.log(self.state);
    }, 250);
  }

  changeInputMessage(inputValue) {
    this.setState({ messageInput: inputValue });
  }

  render() {
    return (
      <div className="chat">
        <input className="input-message"
               onKeyPress={this.handleKeyPress}
               onChange={this.handleChange}/>
        <br/><br/>
        {this.state.messages.map((message, index) => {
          return <Message key={message + "_" + index} text={message.text}/>;
        })}
      </div>
    );
  }
}

export default Chat;