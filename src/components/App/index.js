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
				isSelected: true
			},
			{
				title: 'Card information',
				isClickable: false,
				isSelected: false
			},
			{
				title: 'Finish',
				isClickable: false,
				isSelected: false
			}
		]
	}

	handleSwitch = () => {
		
		let a = this.state.isSelected;

		switch(a) {
			case a: return <PersonalForm />;
			break;
		}
	}

	handleCLick = () => {
		this.setState({IsSelected: !this.state.IsSelected})
	}

	render() {
		return(
			<div className='container'>
				<div className='tab-panel'>
					{this.state.Steps.map(item => <Step title={item.title} isSelected={item.isSelected} isClickable={item.isClickable}/>)}
				</div>
				<div className='form-content'>
					{this.handleSwitch()}
					{/* {this.state.IsSelected ? <PersonalForm  /> : <CardForm />} */}
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