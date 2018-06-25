import React from 'react';
import PersonalForm from '../PersonalForm';
import CardForm from '../CardForm';
import Step from '../Step';
import './App.css';

class App extends React.Component {

	state = {
		
	}

	handleCLick = () => {
		console.log('click');
	}

	render() {
		return(
			<div className='container'>
				<div className='tab-panel'>
					<Step title='title'/>
					<Step title='title'/>
					<Step title='title'/>
					{/* {this.state.map(item => <Step title={item}/>)} */}
				</div>
				<div className='form-content'>
					{/* {} */}
					<PersonalForm  />
					<CardForm />
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