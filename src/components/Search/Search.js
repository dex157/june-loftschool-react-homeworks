import React, { PureComponent } from 'react';
import ShowPreview from '../ShowPreview';
import { searchRequest } from '../../actions/search';
import { showRequest } from '../../actions/show';
import { connect } from 'react-redux';
import {
  getSearchFetchState,
  getSearchError,
  getSerials
} from '../../selectors/searchSelectors';

class Search extends PureComponent {
  state = {
    inputValue: ''
  };

  fetchDataSearch = () => {
    this.props.searchRequest(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  fetchDataShow = showId => {
    this.props.showRequest(showId);
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  sendRequestOnEnter = e => {
    if (e.key === 'Enter') {
      this.fetchDataSearch();
    }
  };

  render() {
    const { inputValue } = this.state,
      { isFetching, error, serials } = this.props;

    if (isFetching) {
      return <p>Выполняется поиск</p>;
    }

    if (error) {
      return <p>Произошла сетевая ошибка</p>;
    }

    return (
      <React.Fragment>
        <div className="serials__search">
          <input
            value={inputValue}
            placeholder="Название сериала"
            onChange={this.handleInputChange}
            onKeyPress={this.sendRequestOnEnter}
          />
          <button onClick={this.fetchDataSearch}>Найти</button>
        </div>
        <ul className="serials__list">
          {serials.map(({ id, name, image, summary }) => (
            <ShowPreview
              key={id}
              id={id}
              name={name}
              image={image}
              summary={summary}
              fetchDataShow={this.fetchDataShow}
            />
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: getSearchFetchState(state),
  error: getSearchError(state),
  serials: getSerials(state)
});

const mapDispatchToProps = { searchRequest, showRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
