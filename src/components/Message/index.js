import React, { Component } from 'react';
import './Message.css';

export default class Message extends Component {
  render() {
    return <div className="message">{this.props.text}</div>;
  }
}
