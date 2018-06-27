import React, {Component} from 'react';

class CardNumberInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: this.format(this.props.cardNumber)
    }
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({number: this.format(nextProps.cardNumber)})
  }

  inputOnChange = e => {
    this.props.onChange(this.normalize(e.target.value))
  }

  render() {
    return (
      <input type="text" onChange={this.inputOnChange} value={this.state.number}/>
    );
  }

  format = num => {
    if (num) {
      return num
        .toString()
        .replace(/(\S{4})/g, '$1 ')
        .replace(/ +/g, ' ')
        .trim();
    }
          
    return '';
  }

  normalize = num => {
    if (num) {
      return num
        .toString()
        .replace(/ /g, '');
    }
    
    return '';
  }
}

export default CardNumberInput;