import React from 'react';
import Title from '../Title';
import './PersonalForm.css';

function PersonalForm({firstName, lastName, email}) {

		return(
			<div className='personal-form'>
				<Title title='Персональная информация'/>
				<input type="text" name='firstName' placeholder='First name' value={firstName}/>
				<input type="text" name='lastName' placeholder='Last name' value={lastName}/>
				<input type="text" name='email' placeholder='Email' value={email}/>
			</div>
		)

}

export default PersonalForm;