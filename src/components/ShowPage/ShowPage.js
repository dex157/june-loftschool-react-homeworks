import React, { PureComponent, Fragment } from 'react';
import { showRequest } from 'actions/show';
import { connect } from 'react-redux';

class ShowPage extends PureComponent {
  componentDidMount = () => {
    const { showRequest } = this.props;
    const { id } = this.props.match.params;

    showRequest(id);
  };

  render() {
    const { entities, isFetching, error } = this.props;
    const { name, image, summary } = entities;

    if (isFetching) {
      return <p>Загрузка...</p>;
    }

    if (error) {
      return <p>Ошибка! Попробуйте перезагрузить страницу.</p>;
    }

    return (
      <Fragment>
        <p>{name}</p>
        {image && <img src={image} alt={name} />}
        <div dangerouslySetInnerHTML={{ __html: summary }} />
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
