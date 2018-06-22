import React from 'react';
import './Chat.css';
import Message from '../Message';

class Chat extends React.Component {
	state = {
		messages: [],
		messageInput: ''
	}
	eventChange = (event) => {
		this.setState({messageInput: event.target.value})
	}

	eventKeyPress = (event) => {
		if (event.key === 'Enter') {
			this.setState({messages: [...this.state.messages, this.state.messageInput]})
			this.setState({messageInput: ''})
		}
	}

	render() {
		return  (
			<div className='chatMain'>
				{this.state.messages.map(item => <Message text={item} /> )}
				<input value={this.state.messageInput} onChange={this.eventChange} onKeyPress={this.eventKeyPress}/>
			</div>  
		)
	} 
}

export default Chat;
