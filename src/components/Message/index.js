import React, { PureComponent } from 'react';
import './Message.css';
class Message extends PureComponent {
  state = {};
  render() {
    const { text } = this.props;
    const { key } = this.props;

    return (
      <span key={key} className="message">
        {text}
      </span>
    );
  }
}
export default Message;
