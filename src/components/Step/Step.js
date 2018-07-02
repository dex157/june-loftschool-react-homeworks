import React, {Component} from 'react';
import './Step.css';

class Step extends Component {

    handleclick = event => {
        const {isClickable} = this.props;

        if (isClickable) {
            console.log('event.target.dataset.id', event.target.dataset.id)
            this.props.onClick(event.target.dataset.id);
        }
    }

    render () {
        const {isSelected, number} = this.props;
        return(
            <div data-id={number} className={isSelected ? 'step-selected step step-clickable' : 'step step-clickable'} onClick={this.handleclick}>
                <p className='step__number'>{number}</p>
                <p className='step__title'>{this.props.children}</p>
            </div>
        )
    }
}

export default Step;

