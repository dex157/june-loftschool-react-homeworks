import React from 'react';
import PersonalForm from '../PersonalForm';
import CardForm from '../CardForm';
import Step from '../Step';
import './App.css';

class App extends React.Component {

	state = {
		step: 1,
		Steps: [
			{
				title: 'Personal information',
				isSelected: true,
			},
			{
				title: 'Card information',
				isSelected: false,
			},
			{
				title: 'Finish',
				isSelected: false,
			}
		],
		firstName: '',
		lastName: '',
		email: '',
		cardNumber: '',
		isClickable: false
	}

	onChangeForm = (event) => {
		if(this.state.firstName !== '' && this.state.lastName !== '' && this.state.email.includes('@')){
			this.setState({isClickable: true})
		}	

		if(event.target.name === 'firstName'){
			this.setState({firstName: event.target.value});
		} else if(event.target.name === 'lastName'){
			this.setState({lastName: event.target.value});
		} else if(event.target.name === 'email'){
			this.setState({email: event.target.value})
		}	
		
		
	}

	onChangeFormCard = (event) => {
		if(event.target.name === 'cardNumber'){
			this.setState({cardNumber: event.target.value});
		} 
		
		if(this.state.cardNumber.length === 16) {
			this.setState({isClickable: true});
		}

	}

	handleSwitch = () => {
		const {step} = this.state;

		switch(step) {
			case 1: 
				return <PersonalForm firstName={this.state.firstName} lastName={this.state.lastName} email={this.state.email} onChangeForm={this.onChangeForm}/>;
			case 2: 
				return <CardForm cardNumber={this.state.cardNumber} onChangeFormCard={this.onChangeFormCard}/>;
			case 3: 
				return <p>Получилось!</p>;
			default:
				return <p>Чтото не так :(</p>
			
		}
	}

	handleCLick = (event) => {
		const {step} = this.state;

		if(this.state.isClickable && step <= 2){
			this.setState({step: step + 1})
			this.setState({isClickable: false})
		}
	}

	clickStep = (event) => {
		console.log(event.target.key)
	}

	render() {
		return(
			<div className='container'>
				<div className='tab-panel'>
					{this.state.Steps.map((item, i) => <Step key={i} title={item.title} isSelected={item.isSelected} onClick={this.clickStep}/>)}
				</div>
				<div className='form-content'>
					{this.handleSwitch()}
				</div>
				<div className='button-panel'>
					<button className={this.state.isClickable ? 'button-next' : 'button-next:disabled'} onClick={this.handleCLick}>next</button>
				</div>
			</div>
		)
	}
}

export default App;