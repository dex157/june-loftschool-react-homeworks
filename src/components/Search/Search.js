import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { searchRequest } from '../../actions/search';
import ShowPreview from '../ShowPreview';
import './Search.css';

class Search extends PureComponent {
  state = {
    search: ''
  };

  handleChangeSearch = event => {
    this.setState({ search: event.target.value });
  };

  handleClickSearch = () => {
    this.setState({ search: '' });
    this.props.searchRequest(this.state.search);
  };

  render() {
    const { isFetching, error, result } = this.props;
    if (isFetching) {
      return <p>Выполняется поиск</p>;
    }

    if (error) {
      return <p>Произошла ошибка: {error}</p>;
    }

    return (
      <div>
        <div className="search-input">
          <input
            value={this.state.search}
            onChange={this.handleChangeSearch}
            placeholder="Название сериала"
          />
          <button onClick={this.handleClickSearch}>Найти</button>
        </div>
        <div className="t-search-result list">
          {result.map(series => (
            <ShowPreview
              key={series.id}
              name={series.name}
              image={series.image && series.image.medium}
              id={series.id}
              summary={series.summary}
            />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);