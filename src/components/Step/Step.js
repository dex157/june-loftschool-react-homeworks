import React, {Component} from 'react';
import './Step.css';

class Step extends Component {

	handleClick = event => {
		const {isClickable, onClick, number} = this.props;

		if (isClickable) {
			onClick(number);
		}
	}

	render () {
		const {isSelected, number} = this.props;
		return(
			<div data-id={number} className={isSelected ? 'step-selected step step-clickable' : 'step step-clickable'} onClick={this.handleClick}>
				<p className='step__number'>{number}</p>
				<p className='step__title'>{this.props.children}</p>
			</div>
		)
	}
}

export default Step;

