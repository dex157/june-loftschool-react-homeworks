import React, { Component } from 'react'
import Message from '../Message';

import './Chat.css'

class Chat extends Component {
    state = {
        messages: [],
        messageInput: ''
    };

    changeInputMessage = event => {
        this.setState({
            messageInput: event.target.value
        });
    };
    sendMessageOnEnter = event => {
        if (event.key === 'Enter') {
            this.setState(state => ({
                messages: [...this.state.messages, { text: this.state.messageInput }],
                messageInput: ''
            }));
        }
    };
    render() {
        return (
            <div className="chat">
                <div className="message-list">
                    <div className="messages">
                        {this.state.messages.map((mes, key) => (
                            <Message key={key} text={mes.text} />
                        ))}
                    </div>
                </div>
                <input
                    className="input-message"
                    value={this.state.messageInput}
                    onChange={this.changeInputMessage}
                    onKeyPress={this.sendMessageOnEnter}
                />
            </div>
        );
    }
}

export default Chat;