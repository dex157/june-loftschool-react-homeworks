import React from 'react';
import PersonalForm from '../PersonalForm';
import CardForm from '../CardForm';
import Step from '../Step';
import './App.css';

class App extends React.Component {

	state = {
		step: 1,
		firstName: '',
		lastName: '',
		email: '',
		cardNumber: '',
		isClickable: false,
		steps: ['Personal information', 'Card information', 'Finish']
	}

	onChangeForm = (name, value) => {
			this.setState({[name]: value});
		}
		isFormCommitable = () => {
				const {step, firstName, lastName, email, cardNumber} = this.state;

				if (step === 1) {
						if (firstName && lastName && email && email.includes('@')) {
								return true;
						}
				} else if (step === 2) {
						if (cardNumber.length === 16) {
								return true;
						}
				}
				return false;
		}

	// onChangeFormCard = (event) => {
	// 	if(event.target.name === 'cardNumber'){
	// 		this.setState({cardNumber: event.target.value});
	// 	} 
		
	// 	if(this.state.cardNumber.length === 16) {
	// 		this.setState({isClickable: true});
	// 	}

	// }

	handleSwitch = () => {
		const {step} = this.state;

		switch(step) {
			case 1: 
				return <PersonalForm firstName={this.state.firstName} lastName={this.state.lastName} email={this.state.email} onChangeForm={this.onChangeForm} />;
			case 2: 
				return <CardForm cardNumber={this.state.cardNumber} onChangeForm={this.onChangeForm}/>;
			case 3: 
				return <p>Получилось!</p>;
			default:
				return <p>Чтото не так :(</p>
			
		}
	}

	handleClickNextForm = () => {
		const {step} = this.state;
		this.setState({step: step + 1});
	}

	handleTabClick = step => {
		this.setState({step: step});
	}

	render() {
		const {steps, step} = this.state;
		return(
			<div className='container'>
				<div className='tab-panel'>
					{steps.map((item, i) => <Step key={i} number={i + 1} isSelected={step === i + 1} isClickable={step > i} onClick={this.handleTabClick}>{item}</Step>)}
				</div>
				<div className='form-content'>
					{this.handleSwitch()}
				</div>
				<div className='button-panel'>
					<button disabled={!this.isFormCommitable()} className={this.state.isClickable ? 'button-next' : 'button-next:disabled'} onClick={this.handleClickNextForm}>next</button>
				</div>
			</div>
		)
	}
}

export default App;