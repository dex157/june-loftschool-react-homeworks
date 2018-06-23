import React, {Component} from 'react';

export default class Step extends Component {
    handleClick = number => {

    }

    /**
     * Вычислить дополнительные классы для тега с классом step
     */
    calculateStepClassName = conditions => {
        const tmpArray = []

        for (let key in conditions) {
            if (conditions.hasOwnProperty(key) && conditions[key]) {
                tmpArray.push('step-' + key.slice(2).toLowerCase());
            }
        }

        return tmpArray.join(' ')
    }

    render() {
        const {isSelected, isClickable, number, onClick} = this.props,
            stepClasses = this.calculateStepClassName({isSelected, isClickable}),
            title = this.props.children;

        if (isClickable) {
            onClick(number);
        }

        return (
            <div className={"step" + (stepClasses ? ` ${stepClasses}` : "")}>
                <p className="step__number">{number}</p>
                <p className="step__title">{title}</p>
            </div>
        )
    }
}