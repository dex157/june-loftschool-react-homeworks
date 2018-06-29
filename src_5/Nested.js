import React from 'react';
import './index.css';
import {
  Link,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

const CatPhotoComponent = ({ match }) => {
  console.log(match);
  return <p>cat Photo {match.params.photoId}</p>;
};

const CatComponent = ({ match }) => {
  const { id } = match.params;

  return (
    <div>
      <h3>Cat {id}</h3>
      <div>
        <Link to={`${match.url}/photo/1`}>Photo 1</Link>{' '}
        <Link to={`${match.url}/photo/2`}>Photo 2</Link>{' '}
        <Link to={`${match.url}/photo/3`}>Photo 3</Link>{' '}
        <Link to={`${match.url}/photo/4`}>Photo 4</Link>{' '}
        <Link to={`${match.url}/photo/5`}>Photo 5</Link>
      </div>

      <div>
        <Route
          path={`${match.path}/photo/:photoId([1-5])`}
          component={CatPhotoComponent}
        />
      </div>
    </div>
  );
};

const Hobbies = ({ match }) => {
  console.log(match);
  return (
    <div>
      <p>Hobbies</p>
      <div>
        <Link to={`${match.url}/cat/1`}>Cat 1</Link>{' '}
        <Link to={`${match.url}/cat/2`}>Cat 2</Link>{' '}
        <Link to={`${match.url}/cat/3`}>Cat 3</Link>{' '}
        <Link to={`${match.url}/cat/4`}>Cat 4</Link>{' '}
        <Link to={`${match.url}/cat/5`}>Cat 5</Link>
      </div>

      <div>
        <Switch>
          <Route
            path={`${match.path}/cat/:id([1-5])`}
            component={CatComponent}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
};

const App = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>{' '}
      <Link to="/Hobbies">Hobbies</Link>
    </nav>
    <hr />
    <div>
      <Switch>
        <Route path="/" render={() => <p>Home</p>} exact />
        <Route path="/Hobbies" component={Hobbies} />
      </Switch>
    </div>
  </div>
);

export default App;
