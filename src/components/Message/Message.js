import React from "react";
import "./Message.css";

class Message extends React.Component {

  render() {
    const {
      text
    } = this.props;

    return (
      <span className='message'>{text}</span>
    );
  }
}


export default Message;
