import React, { Component } from "react";
import Message from './Message';

class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            messageInput: ''
        }
    }

    changeInputMessage = e => {
        this.setState({
            messageInput: e.target.value
        });
    }

    sendMessageOnEnter = e => {
        if (e.key === 'Enter') {
            // var messageList = [...this.state.messages, { text: this.state.messageInput }];
            // console.log(messageList);
            this.setState({
                messages: [...this.state.messages, { text: this.state.messageInput }],
                messageInput: ''
            });
        }
    }

    render() {

        return (
            <div className="chat">
                <div>
                    {this.state.messages.map(a => <Message text={a.text} key={a.text} /> )}
                </div>
                <input 
                    className="input-message" 
                    value={this.state.messageInput} 
                    onChange={this.changeInputMessage}
                    onKeyPress={this.sendMessageOnEnter}
                />
            </div>
        )
    }
}

export default Chat;