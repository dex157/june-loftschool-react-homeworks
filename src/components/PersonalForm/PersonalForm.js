import React, {Component} from 'react';
import Title from '../Title';
import './PersonalForm.css';

class PersonalForm extends Component {

	handleChangeForm = e => {
		const {onChangeForm} = this.props;
		const {name, value} = e.target;

		onChangeForm(name, value);
	}

	render() {
		const {firstName, lastName, email} = this.props;
		return(
			<div className='personal-form'>
				<Title title='Персональная информация'/>
				<input type="text" name='firstName' placeholder='First name' value={firstName} onChange={this.handleChangeForm}/>
				<input type="text" name='lastName' placeholder='Last name' value={lastName} onChange={this.handleChangeForm}/>
				<input type="text" name='email' placeholder='Email' value={email} onChange={this.handleChangeForm}/>
			</div>
		)
	}
}

export default PersonalForm;