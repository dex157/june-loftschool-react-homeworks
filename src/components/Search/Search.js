import React from 'react';
import { connect } from 'react-redux';
import './Search.css';
import ShowPreview from '../ShowPreview';

import { searchRequest } from '../../actions/search';

function getSearchData(state) {
  return state.search.result.map(({ id, image, name, summary }) => ({
    id: id,
    image: image ? image : null,
    name: name,
    summary: summary
  }));
}

const mapStateToProps = state => ({
  ls: state,
  searchIsLoaded: state.search.loadingState === 'SUCCESS',
  searchIsIdle: state.search.loadingState === 'IDLE',
  searchIsFailure: state.search.loadingState === 'FAILURE',
  searchIsLoading: state.search.loadingState === 'LOADING',
  dataSearch: getSearchData(state)
});

const mapDispatchToProps = { searchRequest };

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  requestData = () => {
    this.props.searchRequest(this.inputRef.current.value);
  };

  render() {
    const {
      searchIsLoading,
      searchIsFailure,
      searchIsIdle,
      searchIsLoaded,
      dataSearch
    } = this.props;
    console.log(JSON.stringify(this.props.ls));

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
