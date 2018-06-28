import React, {Component} from 'react';

class CardNumberInput extends Component {
  normalize = cardStr => cardStr.split(' ').join('');
  
  format = cardStr => {
    return cardStr = (!isNaN(parseFloat(cardStr)) && isFinite(cardStr)) 
      ? 
      `${cardStr}`.replace(/(\w{0,4})/g, '$1 ').trim()
      : 
      '';
  };
  
  state = {
    number: this.format(this.props.cardNumber)
  };

  static defaultProps = {
    cardNumber: ''
  };

  componentWillReceiveProps = (nextProps) => {
    this.setState({number: this.format(nextProps.cardNumber)
    })
  };

  handleChangeInp = event => {
    const { onChange } = this.props;
    const cardStr = this.normalize(event.target.value)
    if (cardStr.length > 16) return;

    onChange(cardStr);
  };

  render() {
    const { number } = this.state;
    
    return (
    <input value={number} onChange={this.handleChangeInp}></input>
    )
  }
}

export default CardNumberInput;
