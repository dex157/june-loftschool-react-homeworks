import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import './Search.css';

import { searchRequest } from '../../actions/search';
import ShowPreview from '../ShowPreview';

class Search extends Component {
  state = {
    searchString: ''
  };

  handleChangeField = e => {
    this.setState({ searchString: e.target.value });
  };

  handleButtonClick = () => {
    const { searchRequest } = this.props,
      { searchString } = this.state;

    searchRequest(searchString);

    this.setState({ searchString: '' });
  };

  render() {
    const { result, isFetching, error } = this.props,
      { searchString } = this.state;

    return (
      <Fragment>
        <div className="sc-bxivhb kayeln">
          {!isFetching &&
            !error && (
              <Fragment>
                <input
                  value={searchString}
                  placeholder="Название сериала"
                  onChange={this.handleChangeField}
                />
                <button onClick={this.handleButtonClick}>Найти</button>
              </Fragment>
            )}

          {isFetching && <div>Выполняется поиск</div>}
          {error && <div>Произошла ошибка: {error.toString()}</div>}
        </div>
        <div className="t-search-result sc-htpNat kRtOTp">
          {result.map(item => {
            const image =
              item.image && item.image.medium ? item.image.medium : '';
            return (
              <ShowPreview
                key={item.id}
                {...{
                  image: image,
                  name: item.name,
                  id: item.id,
                  summary: item.summary
                }}
              />
            );
          })}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    result: state.search.result,
    isFetching: state.search.isFetching,
    error: state.search.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchRequest: payload => {
      dispatch(searchRequest(payload));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
