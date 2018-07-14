import React, { PureComponent } from 'react';
import ShowPreview from '../ShowPreview';
import './Search.css';

export default class Search extends PureComponent {
  state = {
    search: ''
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
        <div className="kayeln">
          <input
            value={this.state.search}
            onChange={this.handleChangeSearch}
            placeholder="Название сериала"
          />
          <button onClick={this.handleClickSearch}>Найти</button>
        </div>
        <div className="t-search-result result">
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

  handleChangeSearch = event => {
    this.setState({ search: event.target.value });
  };

  handleClickSearch = () => {
    this.setState({ search: '' });
    this.props.searchRequest(this.state.search);
  };
}
