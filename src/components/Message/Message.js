import React, {Component} from 'react';

export default class Message extends Component {
  render() {
    const {text} = this.props;
    return (
      <span className="message">
        {text}<br/>
      </span>
    );
  }
}
