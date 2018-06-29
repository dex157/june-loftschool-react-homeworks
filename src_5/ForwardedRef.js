import React, { Component, PureComponent } from 'react';

export class ForwardedRefExample extends Component {
  greeting = React.createRef();

  componentDidMount() {
    setTimeout(() => {
      console.log(this.greeting.current);
      this.greeting.current.toUpperCase();
    }, 3000);
  }

  render() {
    return (
      <PureGreeting ref={this.greeting} name="Artem" />
    );
  }
}

class Greeting extends Component {
  state = {
    isUpper: false,
  };

  toUpperCase = () => {
    this.setState({ isUpper: true });
  };

  render() {
    const { isUpper } = this.state;
    const { name } = this.props;

    return (
      <p>
        {isUpper ? 'HELLO' : 'hello'}, {name}!
      </p>
    );
  }
}

const PureGreeting = pure(Greeting);

function pure(WrappedComponent) {
  class PuredComponent extends PureComponent {
    render() {
      return (
        <WrappedComponent
          {...this.props}
          ref={this.props.forwaredRef}
        />
      );
    }
  }

  return React.forwardRef((props, ref) => (
    <PuredComponent {...props} forwaredRef={ref} />
  ));
}

export default ForwardedRefExample;
