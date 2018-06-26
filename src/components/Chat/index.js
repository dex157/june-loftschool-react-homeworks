import React, {Component} from 'react';
import './Chat.css';
import Message from '../Message';

class Chat extends Component {
	state = {
		messages: [],
		messageInput: ''
	}
	changeInputMessage = event => {
		this.setState({messageInput: event.target.value})
	}

	sendMessageOnEnter = event => {
		if (event.key === 'Enter' ) {
			this.setState({messages: [...this.state.messages, {text: this.state.messageInput}]})
			this.setState({messageInput: ""})
		}
	}

	render() {
		return  (
			<div className='chat'>
				<input className='input-message' value={this.state.messageInput} onChange={this.changeInputMessage} onKeyPress={this.sendMessageOnEnter}/>
                {this.state.messages.map((item, i) => <Message text={item.text} key={i} /> )}
			</div>  
		)
	} 
}

export default Chat;