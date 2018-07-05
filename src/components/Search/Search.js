import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Search.css';
import ShowPreview from '../ShowPreview';
import {
  getSearchData,
  searchIsLoaded,
  searchIsIdle,
  searchIsFailure,
  searchIsLoading
} from '../../selectors';

import { searchRequest } from '../../actions/search';

const mapStateToProps = state => ({
  searchIsLoaded: searchIsLoaded(state),
  searchIsIdle: searchIsIdle(state),
  searchIsFailure: searchIsFailure(state),
  searchIsLoading: searchIsLoading(state),
  dataSearch: getSearchData(state)
});

const mapDispatchToProps = { searchRequest };

class Search extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  requestData = () => {
    const id = this.inputRef.current.value;
    const { searchRequest } = this.props;
    searchRequest(id);
  };

  render() {
    const {
      searchIsLoading,
      searchIsFailure,
      searchIsIdle,
      searchIsLoaded,
      dataSearch
    } = this.props;
    return (
      <div>
        <div>
          {searchIsLoading && <p>Данные загружаются...</p>}
          {searchIsFailure && (
            <p>Произошла ошибка, пожалуйста, перезагрузите страницу</p>
          )}
          {(searchIsIdle || searchIsLoaded) && (
            <div>
              <input ref={this.inputRef} placeholder="Название сериала" />
              <button onClick={this.requestData}>Найти</button>
            </div>
          )}
        </div>
        <div className="t-search-result">
          {searchIsLoaded &&
            dataSearch.map(({ id, name, image, summary }) => {
              return (
                <ShowPreview
                  id={id}
                  name={name}
                  image={image}
                  summary={summary}
                  key={id}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
