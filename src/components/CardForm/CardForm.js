import React, { Fragment } from 'react';
import './CardForm.css';

const CardForm = ({ cardNumber, onChangeForm, Title }) => {
  return (
    <Fragment>
      <div className="card-form">
        <Title title={'Номер карты'} />
        <input
          type="number"
          name="cardNumber"
          placeholder="0000000000000000"
          onChange={onChangeForm}
          value={cardNumber}
        />
      </div>
    </Fragment>
  );
};

export default CardForm;
