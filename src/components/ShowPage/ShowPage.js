import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './ShowPage.css';
import { showRequest } from '../../actions/show';
import { getShow } from '../../selectors/';

class ShowPage extends Component {
  componentDidMount() {
    const show = this.props.match.params.id;
    this.props.showRequest(show);
  }

  render() {
    const { isFetching, entities } = this.props;
    const { name, image, summary, cast } = entities;
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

const mapDispatchToProps = {
  showRequest
};

const mapStateToProps = state => {
  return {
    isFetching: state.shows.isFetching,
    entities: getShow(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
