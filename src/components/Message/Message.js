import React, {Component} from 'react';

export default class Message extends Component {
    render() {
        const text = this.props.text;

        return (
            <span className="message">{text}</span>
        )
    }
}