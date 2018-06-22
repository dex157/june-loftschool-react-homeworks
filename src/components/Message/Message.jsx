import React from 'react';
import './Message.css';

export default props => {
  return <span className="message">{props.text}</span>;
};
