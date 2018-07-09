import React, { PureComponent } from 'react';
import './Message.css';

export default class Message extends PureComponent {
  componentDidMount() {
    if (this.node) {
      this.node.scrollIntoView();
    }
  }

  render() {
    return (
      <span className="message" ref={node => (this.node = node)}>
        {this.props.text}
      </span>
    );
  }
}
