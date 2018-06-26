import React from "react";
import "./Chat.css";
import Message from "./../Message";

class Chat extends React.Component {

  state = {
    messageInput: "",
    messages: []
  };

  changeInputMessage = (e) => {
    this.setState({
      messageInput: e.target.value
    });
  };

  sendMessageOnEnter = (e) => {
    if (e.key === "Enter") {
      this.setState((prevState) => {
        return {
          messageInput: "",
          messages: prevState.messages.concat([{ text: prevState.messageInput }])
        };
      });
    }
  };

  render() {

    const messagesArr = this.state.messages;
    const messageInput = this.state.messageInput;

    return (
      <div className='chat'>
        <div className="message-list">
          <div className="messages">
            {messagesArr && messagesArr.map(item =>
              <Message key={item} text={item.text}/>
            )}

          </div>
          <input className="input-message"
                 value={messageInput}
                 onChange={this.changeInputMessage}
                 onKeyPress={this.sendMessageOnEnter}
          />
        </div>
      </div>
    );
  }
}

export default Chat;