import React, { Component } from 'react';

class Child extends Component {
  childMethod() {
    return 'child method called';
  }

  render() {
    return <p>Child</p>;
  }
}

export default class Parent extends Component {
  componentDidMount() {
    console.log(
      this.child.childMethod() // child method called
    );
  }
  render() {
    return <Child ref={sameData => (this.child = sameData)} />;
  }
}
