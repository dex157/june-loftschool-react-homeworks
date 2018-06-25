import React from 'react';
import Title from '../Title';
import './CardForm.css';

class CardForm extends React.Component {
	state={

	}
	render(){
		return(
			<div className='card-form'>
				<Title title='Номер карты'/>
				<input type="text" placeholder="0000000000000000"/>

			</div>
		)
	}
}

export default CardForm;
