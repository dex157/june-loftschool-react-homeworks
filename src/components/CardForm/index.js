import React from 'react';
import Title from '../Title';
import './CardForm.css';

function CardForm({cardNumber, onChangeFormCard}) {

		return(
			<div className='card-form'>
				<Title title='Номер карты'/>
				<input type="text" name='cardNumber' placeholder="0000000000000000" value={cardNumber} onChange={onChangeFormCard}/>
			</div>
		)

}

export default CardForm;
