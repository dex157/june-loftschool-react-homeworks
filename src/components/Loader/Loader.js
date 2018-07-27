import React from 'react';
import Spinner from 'react-svg-spinner';
import './Loader.css';

class Loader extends React.PureComponent {
  render() {
    return (
      <div className="loader__container">
        <div className="loader">
          <Spinner size="64px" color="fuchsia" gap={5} />
        </div>
      </div>
    );
  }
}

export default Loader;
