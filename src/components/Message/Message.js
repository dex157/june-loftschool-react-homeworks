import React from 'react';

export default class Message extends React.Component {
    render() {
        return (
            <span className="message">
                {this.props.text}
                {this.props.disc}
            </span>
        )
    }
}