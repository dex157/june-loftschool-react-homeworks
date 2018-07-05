import React, { PureComponent } from 'react';
import { getShowRequest } from '../../actions/show';
import { LOADING_STATE } from '../../reducers/shows';
import { connect } from 'react-redux';
import ShowPreview from '../ShowPreview/ShowPreview';

class ShowPage extends PureComponent {
  fetchData = showId => {
    this.props.getShowRequest(showId);
  };

  componentDidMount = () => {
    this.fetchData(this.props.match.params.id);
  };

  renderActor = actor => {
    return (
      <div className="t-person">
        <p>{actor.person.name}</p>
        <img src={actor.person.image.medium} alt={actor.person.name} />
      </div>
    );
  };

  render() {
    const { show, loadingState } = this.props;

    if (loadingState === LOADING_STATE.loading) {
      return <p>Данные загружаются...</p>;
    }

    return (
      <div>
        <ShowPreview
          key={show.id}
          {...{
            image: show.image ? show.image.medium : '',
            name: show.name,
            id: show.id,
            summary: show.summary
          }}
        />
        <div>{show._embedded && show._embedded.cast.map(this.renderActor)}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoaded: LOADING_STATE.success,
  isError: LOADING_STATE.failure,
  isLoading: LOADING_STATE.loading,
  show: state.shows.entities
});

const mapDispatchToProps = { getShowRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
