import React, { Component } from 'react';
import './Message.css';

export default class Message extends Component {
  render() {
    return <span className="message">{this.props.text}</span>;
  }
}
