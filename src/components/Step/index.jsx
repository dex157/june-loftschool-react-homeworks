import React, { Component } from 'react';
import './Step.css';

class Step extends Component {

    handleClick = () => {
        const { number, isClickable } = this.props;
        isClickable && this.props.onClick(number);
    }
    
    render() {
        const { number, isClickable, isSelected, children} = this.props;
        const classes = ['step'];
        isSelected && classes.push('step-selected');
        isClickable && classes.push('step-clickable');
        const className = classes.join(' ');

        return (
            <div className={className} onClick={this.handleClick}>
                <div className="step__number">{ number }</div>
                <div className="step__title">{ children }</div>
            </div> 
        );
    }
}

export default Step;