import React, { PureComponent } from 'react';
import './Message.css';

export default class Message extends PureComponent {
  render() {
    return <span className="message">{this.props.text}</span>;
  }
}