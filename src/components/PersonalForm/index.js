import React from 'react';
import Title from '../Title';
import './PersonalForm.css';

class PersonalForm extends React.Component {
	state={

	}

	render(){
		return(
			<div className='personal-form'>
				<Title title='Персональная информация'/>
				<input type="text" placeholder='First name'/>
				<input type="text" placeholder='Last name'/>
				<input type="text" placeholder='Email'/>
			</div>
		)
	}
}

export default PersonalForm;