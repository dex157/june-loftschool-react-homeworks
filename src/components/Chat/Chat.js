import React from 'react';
import Message from "../Message/Message";

export default class Chat extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            messages: [],
            messageInput: ''
        };
    }
    changeInputMessage = event => {
        this.setState({ messageInput : event.target.value })
    };

    sendMessageOnEnter = event => {
        if(event.key === 'Enter') {
            this.setState({ messages : this.state.messageInput });
            this.setState({ messageInput : '' });
            console.log(this.state.messages, "this.state.messageInput");
        }

    };

    render() {
        return (
            <div>
                <div className="chat">
                    Hello
                </div>
                <input onChange={this.changeInputMessage} onKeyPress={this.sendMessageOnEnter} className="input-message" />

                <Message text='my name is Ivan' disc={this.state.messageInput}  />
            </div>

        )
    }
}