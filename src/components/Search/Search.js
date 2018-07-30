import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ShowPreview from 'components/ShowPreview';
import { getSeries, isLoading, error } from '../../selectors/search';
import { searchRequest } from '../../actions/search';
import './Search.css';

class Search extends PureComponent {
  state = {
    query: ''
  };

  handleSearchFieldInput = event => {
    const value = event.target.value;
    this.setState({ query: value });
  };

  handleSearchButtonClick = () => {
    const { searchRequest } = this.props;
    const { query } = this.state;

    searchRequest(query);
  };

  render() {
    const { query } = this.state;
    const { series, isLoading, error } = this.props;

    return (
      <section>
        {isLoading ? (
          <div>Выполняется поиск...</div>
        ) : (
          <div className="search">
            <div className="search__header">
              <input
                type="text"
                placeholder="Название сериала"
                value={query}
                onChange={this.handleSearchFieldInput}
              />
              <button onClick={this.handleSearchButtonClick}>Найти</button>
            </div>

            {error ? (
              <div>{error}</div>
            ) : (
              <div className="search__preview t-search-result">
                {series.map(({ id, name, summary, image }) => (
                  <ShowPreview key={id} {...{ id, name, summary, image }} />
                ))}
              </div>
            )}
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  series: getSeries(state),
  isLoading: isLoading(state),
  error: error(state)
});

const mapDispatchToProps = {
  searchRequest
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search)
);
