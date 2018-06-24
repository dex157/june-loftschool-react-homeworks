import React, { Component } from 'react';
import Message from './Message/Message';
import './Chat/Chat.css';

class Chat extends Component {
	state = {
		messageInput: '',
		messages: []
	};

	changeInputMessage = event => {
		this.setState({ messageInput: event.target.value });
	};

	sendMessageOnEnter = event => {
		if (event.key === 'Enter') {
			if (this.state.messageInput !== '') {
				this.setState({
					messageInput: '',
					messages: [
						...this.state.messages,
						{ text: this.state.messageInput }
					]
				});
			}
			setTimeout(function() {
				document.querySelector('.message-list').scrollTop = 5000;
			}, 5);
		}
	};

	showMessages = () => {
		return (
			<div className="messages">
				{this.state.messages.map((text, index) => (
					<Message key={index} text={text.text} />
				))}
			</div>
		);
	};

	render() {
		return (
			<div className="chat">
				<div className="message-list">{this.showMessages()}</div>
				<input
					onKeyPress={this.sendMessageOnEnter}
					onChange={this.changeInputMessage}
					value={this.state.messageInput}
					className="input-message"
					placeholder="Введите сообщение..."
				/>
			</div>
		);
	}
}

export default Chat;
