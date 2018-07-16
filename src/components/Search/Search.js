import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchRequest } from '../../actions/search';
import { withRouter } from 'react-router';
import ShowPreview from '../ShowPreview/ShowPreview';
import './Search.css';

class Search extends Component {
  state = {
    searchValue: ''
  };

  handleChange = e => {
    this.setState({
      searchValue: e.target.value
    });
  };

  handleClick = () => {
    this.props.searchRequest(this.state.searchValue);
    this.setState({ searchValue: '' });
  };

  render() {
    return (
      <React.Fragment>
        <div className="search_bar">
          {this.props.isFetching ? (
            <p>Выполняется загрузка</p>
          ) : (
            <React.Fragment>
              <input
                placeholder="Название сериала"
                onChange={this.handleChange}
                value={this.state.searchValue}
              />
              <button
                onClick={!this.state.searchValue ? null : this.handleClick}
              >
                Найти
              </button>
            </React.Fragment>
          )}
        </div>
        <div className="t-search-result search_results">
          {this.props.result.map(show => (
            <ShowPreview
              name={show.name}
              id={show.id}
              summary={show.summary}
              image={show.image}
              key={show.id}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    result: state.search.result,
    isFetching: state.search.isFetching
  };
};

const mapDispatchToProps = {
  searchRequest
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search)
);
