import React, {Component} from 'react';
import Title from '../Title';
import './CardForm.css';

class CardForm extends Component {

	handleChangeForm = e => {
		const {onChangeForm} = this.props;
		const {name, value} = e.target;

		onChangeForm(name, value);
	}

	render(){
		const {cardNumber} = this.props;
		return(
			<div className='card-form'>
				<Title title='Номер карты'/>
				<input type="text" name='cardNumber' placeholder="0000000000000000" value={cardNumber} onChange={this.handleChangeForm}/>
			</div>
		)
	}
}

export default CardForm;

