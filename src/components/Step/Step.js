import React, { Fragment } from 'react';
import './Step.css';

const Step = ({ currentStep }) => {
  const tabs = [
    { number: 1, title: 'Personal information' },
    { number: 2, title: 'Card information' },
    { number: 3, title: 'Finish' }
  ];

  return (
    <Fragment>
      {tabs.map(step => {
        const { number, title } = step;
        return (
          <div key={step.title} className="step step-clickable">
            <p className="step__number">{number}</p>
            <p className="step__title">{title} </p>
          </div>
        );
      })}
    </Fragment>
  );
};

export default Step;
