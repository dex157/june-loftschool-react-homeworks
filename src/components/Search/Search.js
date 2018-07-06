import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchRequest } from '../../actions/search';
import ShowPreview from '../ShowPreview';
import './Search.css';
import { withRouter } from 'react-router-dom';

class AppRouter extends Component {
  state = {
    searchValue: ''
  };

  handleClick = () => {
    this.props.searchRequest(this.state.searchValue);
  };

  handleChange = event => {
    this.setState({
      searchValue: event.target.value
    });
  };

  render() {
    const { result, isFetching } = this.props;

    if (isFetching)
      return (
        <div>
          <p>Данные загружаются...</p>
          <div className="App-logo" />
        </div>
      );

    return (
      <div>
        <div>
          <input
            value={this.state.searchValue}
            placeholder="Название сериала"
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Найти</button>
        </div>
        <div className="t-search-result">
          {result.map((serial, i) => (
            <ShowPreview key={i + serial.name} {...serial} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.search.isFetching,
  result: state.search.result,
  error: state.search.error
});

const mapDispatchToProps = {
  searchRequest
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppRouter)
);
