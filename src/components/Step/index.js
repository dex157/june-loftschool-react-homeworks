import React from 'react';
import './Step.css';

function Step ({title, isSelected}) {
	return(
		<div className={isSelected ? 'step-selected step step-clickable' : 'step step-clickable'}>
			<p className='step__number'>1</p>
			<p className='step__title'>{title}</p>
		</div>
	)
}

export default Step;

