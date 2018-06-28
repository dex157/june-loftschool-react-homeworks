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
				isClickable: true,
				isSelected: true,
				step: 1
			},
			{
				title: 'Card information',
				isClickable: false,
				isSelected: false,
				step: 2
			},
			{
				title: 'Finish',
				isClickable: false,
				isSelected: false,
				step: 3
			}
		],
		personalForm: {
			firstName: '',
			lastName: '',
			email: ''
		},
		cardForm: {
			cardNumber: ''
		}
	}

	onChangeForm = () => {
		
	}

	handleSwitch = () => {
		const {step} = this.state;

		switch(step) {
			case 1: 
				return <PersonalForm firstName={this.state.personalForm.firstName} lastName={this.state.personalForm.lastName} email={this.state.personalForm.email} onChangeForm={this.onChangeForm}/>;
			case 2: 
				return <CardForm cardNumber={this.state.cardForm.cardNumber}/>;
			case 3: 
				return <p>Получилось!</p>;
			default:
				return <p>Чтото не так :(</p>
			
		}
	}

	handleCLick = () => {
		const {step} = this.state;
		
		if(step <= 2 ) {
			this.setState({step: step + 1})
		}
		
	}

	clickStep = (item) => {
		const step = item.step;
		this.setState({Step: step})
	}

	render() {
		return(
			<div className='container'>
				<div className='tab-panel'>
					{this.state.Steps.map(item => <Step title={item.title} isSelected={item.isSelected} isClickable={item.isClickable} onClick={(item) => this.clickStep(item)}/>)}
				</div>
				<div className='form-content'>
					{this.handleSwitch()}
				</div>
				<div className='button-panel'>
					<button className='button-next' onClick={this.handleCLick}>next</button>
				</div>
			</div>
		)
	}
}

// export { default } from './App';
export default App;