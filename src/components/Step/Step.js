import React, { Component } from "react";
import './Step.css';

class Step extends Component {

    handleClick = () => {
        const { isClickable, number } = this.props;

        if (!isClickable) {
            return;
        }

        this.props.onClick(number);
    }

    render() {
        const { number, children, isClickable, isSelected } = this.props;

        return (
            <div 
                className={`step 
                ${isClickable && 'step-clickable'}
                ${isSelected && 'step-selected'}`}
                onClick={this.handleClick}
            >
                <p className="step__number">{number}</p>
                <p className="step__title">{children}</p>
            </div>
        )
    }
}

export default Step;
