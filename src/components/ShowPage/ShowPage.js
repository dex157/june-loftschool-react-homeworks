import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { showRequest } from '../../actions/show';
class ShowPage extends Component {
  componentDidMount() {
    const { showRequest } = this.props;
    const { id } = this.props.parms.id;
    showRequest(id);
  }
  render() {
    const { entities, isFetching, error } = this.props;
    const { name, summary, actors = [] } = entities;

    return (
      <Fragment>
        {isFetching && <p>Выполняется поиск</p>}
        {error && <p>Ошибка!</p>}
        <p>{name}</p>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
        <div>
          {actors.map(actor => {
            return (
              <div className="t-person" key={actor.id}>
                <p>{actor.name}</p>
                {actor.image && <img src={actor.image} alt={actor.name} />}
              </div>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.shows.isFetching,
  entities: state.show.entities,
  error: state.show.error
});

const mapDispatchToProps = { showRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
