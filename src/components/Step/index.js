import React from 'react';
import './Step.css';

function Step ({title}) {
	return(
		<div className='step'>
			<p className='step__number'>1</p>
			<p className='step__title'>{title}</p>
		</div>
	)
}

export default Step;

