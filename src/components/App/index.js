import React from 'react';
import PersonalForm from '../PersonalForm';
import CardForm from '../CardForm';
import Step from '../Step';
import './App.css';

class App extends React.Component {

	state = {
		Steps: [
			{
				title: 'Personal information',
				isClickable: true,
				isSelected: true,
				Step: 1
			},
			{
				title: 'Card information',
				isClickable: false,
				isSelected: false,
				Step: 2
			},
			{
				title: 'Finish',
				isClickable: false,
				isSelected: false,
				Step: 3
			}
		]
	}

	handleSwitch = () => {

		let a = this.state.Steps[0].Step;

		switch(a) {
			case 1: 
				return <PersonalForm />;
			case 2: 
				return <CardForm />;
			case 3: 
				return <p>Получилось!</p>;
			default:
				return <p>Чтото не так :(</p>
			
		}
	}

	handleCLick = () => {
		this.setState({Step: 1 + this.state.Step})
	}

	// clickStep = (item) => {
	// 	this.setState({Step: item.Step})
	// }

	render() {
		return(
			<div className='container'>
				<div className='tab-panel'>
					{this.state.Steps.map(item => <Step title={item.title} isSelected={item.isSelected} isClickable={item.isClickable} onClick={this.clickStep}/>)}
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