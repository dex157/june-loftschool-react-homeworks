import React, { PureComponent, Fragment } from 'react';
import { showRequest } from '../../actions/show';
import { connect } from 'react-redux';

class ShowPage extends PureComponent {
  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.props.showRequest(id);
  };

  render() {
    const { entities, isFetching, error } = this.props;

    if (isFetching) {
      return <p>Загрузка...</p>;
    }

    if (error) {
      return <p>Ошибка! Попробуйте перезагрузить страницу.</p>;
    }

    const { name, image, summary, _embedded } = entities;
    console.log(entities._embedded);
    return (
      <Fragment>
        <p>{name}</p>
        {image && <img src={image.medium || image.original} alt={name} />}
        <div dangerouslySetInnerHTML={{ __html: summary }} />
        {_embedded &&
          _embedded.cast.map(({ person }) => (
            <div className="t-person" key={person.id}>
              <p>{person.name}</p>
              {person.image && (
                <img
                  src={person.image.medium || person.image.original}
                  alt={person.name}
                />
              )}
            </div>
          ))}
        <div />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
