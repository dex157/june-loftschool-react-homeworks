import React, {Component} from 'react';
import Message from './Message/Message.js'

export default class Chat extends Component {
    state = {
        messages: [],
        messageInput: ''
    }

    changeInputMessage = e => {
        this.setState({messageInput: e.target.value});
    }

    sendMessageOnEnter = e => {
        if (e.key === 'Enter' && String(this.state.messageInput).length > 0) {
            this.setState(prevState => {
                return {messages: [...prevState.messages, {text: this.state.messageInput}]}
            })
            this.setState({messageInput: ''});
        }
    }

    render() {
        const messageInput = this.state.messageInput,
            messages = this.state.messages;

        return (
            <div className="chat">
                <input value={messageInput} type="text" className="input-message" onChange={this.changeInputMessage} onKeyPress={this.sendMessageOnEnter}/>
                {messages.map((item, i) => {
                    return <Message key={i} text={item.text}/>
                })}
            </div>
        )
    }
}