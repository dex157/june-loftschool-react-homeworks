import React, {Component} from 'react';

export default class CardNumberInput extends Component {
   state = {
      number: this.props.cardNumber
   };

   format = (num) => {
      if (num) {
         num = num.toString().replace(/[^0-9]/g, '');

         const matches = num.match(/\d{4,}/g);
         const match = (matches && matches[0]) || '';
         const thousands = [];

         for (let i = 0, len = match.length; i < len; i += 4) {
            thousands.push(match.substring(i, i + 4));
         }

         return thousands.length ? thousands.join(' ') : num;

      } else {
         return '';
      }
   };

   normalize = (num) => {
      return num.replace(/\s/g, '');
   };

   componentWillMount() {
      this.setState({
         number: this.format(this.props.cardNumber)
      });
   }

   componentWillReceiveProps(nextProps) {
      if (this.props !== nextProps) {
         this.setState({
            number: this.format(nextProps.cardNumber)
         });
      }
   }

   handleOnChange = (event) => {
      this.props.onChange(this.normalize(event.target.value));
   };

   render() {
      return <input value={this.state.number} onChange={this.handleOnChange}/>;
   }
}
