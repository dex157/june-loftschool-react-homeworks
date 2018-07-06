import React, { PureComponent } from 'react';
import { showRequest } from '../../actions/show';
import { connect } from 'react-redux';
import './ShowPage.css';
import { withRouter } from 'react-router-dom';

class ShowPage extends PureComponent {
  componentDidMount() {
    const { showRequest, match, entities } = this.props;
    if (!entities.some(show => String(show.id) === match.params.id))
      showRequest(match.params.id);
  }

  getShow(id) {
    const { entities } = this.props;
    const show = entities.filter(serial => String(serial.id) === id)[0];
    if (!show) return null;
    const actors = show._embedded.cast.map(({ person }) => ({
      name: person.name,
      image: person.image ? person.image.medium : null
    }));
    return {
      name: show.name,
      image: show.image ? show.image.medium : null,
      summary: show.summary,
      actors: actors
    };
  }
  render() {
    const { isFetching, match } = this.props;
    const id = match.params.id;

    if (isFetching) return <p>Загрузка данных...</p>;

    const show = this.getShow(id);

    if (!show) return null;

    const { name, image, summary, actors } = this.getShow(id);

    return (
      <div>
        <h2>{name}</h2>
        {image && <img src={image} alt={name} />}
        <div dangerouslySetInnerHTML={{ __html: summary }} />
        <div className="actors-list">
          {actors.map((actor, index) => (
            <div key={index + actor.name} className="t-person">
              <p>{actor.name}</p>
              {actor.image && <img src={actor.image} alt={actor.name} />}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.shows.isFetching,
  entities: state.shows.entities
});

const mapDispatchToProps = {
  showRequest
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShowPage)
);
