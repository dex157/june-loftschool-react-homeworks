import React, { PureComponent, Fragment } from 'react';
import { showRequest } from '../../actions/show';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ShowPage extends PureComponent {
  componentDidMount() {
    const { showRequest } = this.porps;
    const { id } = this.props.match.params;

    showRequest(id);
  }

  render() {
    const { entities, isFetching, error } = this.porps;
    const { name, image, summary, actors = [] } = entities;
    isFetching && <p>Загрузка...</p>;

    error && <p>Ошибка!</p>;

    return (
      <Fragment>
        <p>{name}</p>
        {image && <img src={image} alt={name} />}
        <div dangerouslySetInnerHTML={{ __html: summary }} />
        <div>
          {actors.map(actor => (
            <div className="t-person" key={actor.id}>
              <p>{actor.name}</p>
              {actor.image && <img src={actor.image} alt={actor.name} />}
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.shows.isFetching,
  entities: state.shows.entities,
  error: state.shows.error
});

const mapDispatchToProps = { showRequest };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShowPage)
);
