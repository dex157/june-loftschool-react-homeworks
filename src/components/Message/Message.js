import React from 'react';
import './Message.css';
const Message = props => {
  return (
    <div>
      <span className="message">{props.text}</span>
    </div>
  );
};

export default Message;
