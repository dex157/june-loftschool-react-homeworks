import React, { Component } from 'react';
import './App.css';
import {
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';

const About = () => <div>About</div>;
const Home = () => <div>Home</div>;
const Topics = () => <div>Topics</div>;
// eslint-disable-next-line
const PageNotFound = () => <div>404 Not found</div>;

class App extends Component {
  render() {

    return (
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/topics">Topics</Link>

        <hr />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
          <Redirect from="/about([1-9])" to="/about" />
          {/* <Route path="*" component={PageNotFound} /> */}
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
