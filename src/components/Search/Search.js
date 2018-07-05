import React, { PureComponent } from 'react';
import { getShowsRequest } from '../../actions/search';
import { LOADING_STATE } from '../../reducers/search';
import { connect } from 'react-redux';
import ShowPreview from '../ShowPreview/ShowPreview';

class Search extends PureComponent {
  fetchData = () => {
    this.props.getShowsRequest(this.state.query);
  };

  state = {
    query: ''
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  render() {
    const { shows, loadingState } = this.props;

    if (loadingState === LOADING_STATE.loading) {
      return <p>Данные загружаются...</p>;
    }

    return (
      <div>
        <input
          name="query"
          value={this.state.query}
          onChange={this.handleChange}
          placeholder="Название сериала"
        />
        <button onClick={this.fetchData}>Найти</button>
        <div className="t-search-result">{shows.map(this.renderEpisode)}</div>
      </div>
    );
  }

  renderEpisode = ep => {
    return (
      <ShowPreview
        key={ep.id}
        {...{
          image: ep.image ? ep.image.medium : '',
          name: ep.name,
          id: ep.id,
          summary: ep.summary
        }}
      />
    );
  };
}

const mapStateToProps = state => ({
  isLoaded: LOADING_STATE.success,
  isError: LOADING_STATE.failure,
  isLoading: LOADING_STATE.loading,
  shows: state.search.entities
});

const mapDispatchToProps = { getShowsRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
