import React from "react";

class CardNumberInput extends React.Component {
  state = {
    number: this.format(this.props.cardNumber)
  };

  componentWillMount() {
    this.setState({
      number: this.format(this.props.cardNumber)
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props === nextProps) return;
    this.setState({ number: this.format(nextProps.cardNumber) });
  }

  format(value) {
    return !value ? "" : `${value}`.replace(/(\w{0,4})/g, "$1 ").trimRight();
  }

  normalize(value) {
    return value.replace(/\s/g, "");
  }

  handleInput = event => {
    const { onChange } = this.props;
    if (typeof onChange !== "function") {
      return;
    }
    onChange(this.normalize(event.target.value));
  };

  render() {
    return <input value={this.state.number} onChange={this.handleInput}/>;
  }
}

export default CardNumberInput;
