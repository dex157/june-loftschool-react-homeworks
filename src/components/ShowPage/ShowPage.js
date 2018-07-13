import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './ShowPage.css';
import { showRequest } from '../../actions/show';

class ShowPage extends Component {
  componentDidMount() {
    const show = this.props.match.params.id;
    this.props.showRequest(show);
  }

  render() {
    const { isFetching, entities } = this.props;
    const summary = entities && entities[0] && entities[0].summary;
    const name = entities && entities[0] && entities[0].name;
    const image = entities && entities[0] && entities[0].image;
    const cast =
      (entities &&
        entities[0] &&
        entities[0]._embedded &&
        entities[0]._embedded.cast) ||
      [];
    return isFetching ? (
      <p>Загрузка...</p>
    ) : (
      <Fragment>
        <div>
          <p>{name}</p>
          {image ? <img src={image.medium} alt="test" /> : null}
          <div dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
        {cast.map(e => (
          <div className="container" key={e.person.id}>
            <div className="t-person">
              <p>{e.person.name}</p>
              {e.person.image ? (
                <img src={e.person.image.medium} alt={e.person.name} />
              ) : null}
            </div>
          </div>
        ))}
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showRequest: payload => {
      dispatch(showRequest(payload));
    }
  };
};

const mapStateToProps = state => {
  return {
    isFetching: state.shows.isFetching,
    entities: state.shows.entities
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
