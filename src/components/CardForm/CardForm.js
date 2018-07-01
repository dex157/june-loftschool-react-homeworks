import React, {Component} from 'react';
import './CardForm.css';

export default class CardForm extends Component {
   handleChangeForm = event => {
      const {onChangeForm} = this.props;
      onChangeForm(event.target.name, event.target.value);
   };

   componentWillUnmount() {};

   render() {
      return (
         <div data-test="card-form" className="card-form">
            <h1 className="title">Информация о карте</h1>
            <input name="cardNumber" placeholder="0000 0000 0000 0000" value={this.props.cardNumber} onChange={this.handleChangeForm} />
         </div>
      );
   }
}
