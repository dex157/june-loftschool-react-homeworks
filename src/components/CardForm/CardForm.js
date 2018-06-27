import React, { Component, Fragment } from 'react';

class CardForm extends Component {
  handleChangeForm(e) {
    this.props.onChangeForm(e.target.name, e.target.value);
  }

  componentWillUnmount() {}

  render() {
    return (
      <Fragment>
        <div className="card-form">
          <input
            value={this.props.cardNumber}
            name="cardNumber"
            onChange={e => this.handleChangeForm(e)}
          />
        </div>
      </Fragment>
    );
  }
}

export default CardForm;
