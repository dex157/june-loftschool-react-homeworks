import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import './ShowPage.css';

import { showRequest } from '../../actions/show';

class ShowPage extends Component {
  componentDidMount() {
    const { showRequest, match } = this.props,
      id = match.params.id;

    showRequest(id);
  }

  render() {
    const { isFetching, entities, match } = this.props,
      id = match.params.id,
      findMovie = entities.filter(item => item.id === Number.parseInt(id, 10)),
      movie = findMovie[0],
      cast = (movie && movie._embedded && movie._embedded.cast) || [];

    return (
      <Fragment>
        {!isFetching &&
          movie && (
            <Fragment>
              <p>{movie.name}</p>
              {movie.image &&
                movie.image.medium && (
                  <img src={movie.image.medium} alt={movie.name} />
                )}
              <div dangerouslySetInnerHTML={{ __html: movie.summary }} />
              <div className="sc-ifAKCX dHcTOt">
                {cast.map(item => {
                  return (
                    <div key={item.person.id} className="t-person">
                      <p>{item.person.name}</p>
                      {item.person.image &&
                        item.person.image.medium && (
                          <img
                            src={item.person.image && item.person.image.medium}
                            alt={item.person.name}
                          />
                        )}
                    </div>
                  );
                })}
              </div>
            </Fragment>
          )}
        {isFetching && <div>Загрузка</div>}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    entities: state.shows.entities,
    isFetching: state.shows.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showRequest: payload => {
      dispatch(showRequest(payload));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
