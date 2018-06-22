import React from 'react';
import './Chat.css';
import Message from '../Message';

class Chat extends React.Component {
	state = {
		messages: [],
		messageInput: ''
	}
	changeInputMessage = (event) => {
		this.setState({messageInput: event.target.value})
	}

	sendMessageOnEnter = (event) => {
		if (event.key === 'Enter') {
			this.setState({messages: [...this.state.messages, {text: this.state.messageInput}]})
			this.setState({messageInput: ""})
		}
	}

	render() {
		return  (
			<div className='chat'>
				{this.state.messages.map((item, i) => <Message text={item.text} key={i} /> )}
				
				<input className='input-message' value={this.state.messageInput} onChange={this.changeInputMessage} onKeyPress={this.sendMessageOnEnter}/>
			</div>  
		)
	} 
}

export default Chat;
