import React, {Component} from 'react';
import Message from 'components/Message';
import './Chat.css';

class Chat extends Component {

    state = {
        messages: [], 
        messageInput: ''
    }

    changeInputMessage = e => {
        const value = e.target.value;
        this.setState(state => {
            return {
                messageInput: value
            }
        })
    }

    sendMessageOnEnter = e => {
        if (e.key === 'Enter') {
            const node = document.body.querySelector('.message-list');
            
            this.setState(state => {
                return {
                    messages: [...state.messages, {text: state.messageInput}], 
                    messageInput: ''
                }
            });
            node.scrollTop = node.scrollHeight;
            
        }
    }

    render() {
        let id = 1;

        return (
            <div className='chat'>
                <div className="message-list">
                    <div className="messages">
                    {
                        this.state.messages.map(el => {
                            return <Message key={id++} text={el.text}/>
                        })
                    }
                    </div>
                </div>
                <input 
                    type="text" 
                    onChange={this.changeInputMessage} 
                    onKeyPress={this.sendMessageOnEnter} 
                    className="input-message" 
                    value={this.state.messageInput} />
            </div>
        );
    }
}

export default Chat;