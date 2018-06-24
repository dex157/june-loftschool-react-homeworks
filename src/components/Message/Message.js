import React from 'react';
import './Message.css';

class Message extends React.Component {
  render() {
    return <span className="message">{this.props.text}</span>;
  }
}

export default Message;
