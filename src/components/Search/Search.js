import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { searchRequest } from '../../actions/searchActions';

import ShowPreview from '../ShowPreview/ShowPreview';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = { searchInput: '' };
  }

  hanleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSearch = () => {
    this.props.searchRequest(this.state.searchInput);
  };

  render() {
    const { isFetching, films } = this.props;
    const { searchInput } = this.state;

    return (
      <div className="Search">
        <div className="SearchForm">
          <input
            type="text"
            placeholder="Название сериала"
            name="searchInput"
            value={searchInput}
            onChange={this.hanleInputChange}
          />
          <button onClick={this.handleSearch}>Найти</button>
        </div>
        <div className="SearсhResult">
          {isFetching ? (
            <div>
              <p>Загрузка...</p>
            </div>
          ) : (
            <ul>
              {films.map(film => (
                <article className="results-item" key={film.id}>
                  <h3>
                    <Link to={`/shows/${film.id}`}>{film.name}</Link>
                  </h3>
                  {films.map(({ id, name, image, summary }) => (
                    <ShowPreview
                      key={id}
                      id={id}
                      name={name}
                      image={image}
                      summary={summary}
                    />
                  ))}
                </article>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.search.isFetching,
  films: state.search.films
});

const mapDispatchToProps = {
  searchRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
