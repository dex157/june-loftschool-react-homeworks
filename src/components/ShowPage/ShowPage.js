import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getShowRequest } from '../../actions/show';
import { getShow, isLoading, error } from '../../selectors/shows';
import './ShowPage.css';

class ShowPage extends PureComponent {
  componentDidMount = () => {
    const { getShowRequest, match } = this.props;
    const id = match.params.id;

    getShowRequest(id);
  };

  renderShow(show) {
    const { name, image, summary, cast } = show;

    return (
      <div>
        <h1>{name}</h1>

        <img src={image} alt={name} />

        <p dangerouslySetInnerHTML={{ __html: summary }} />

        <div className="cast">
          <h2>Cast</h2>
          <div className="cast__body">
            {cast.map((person, index) => (
              <div className="cast__person t-person" key={index}>
                <h3>
                  <p>{person.name}</p>
                </h3>
                <img src={person.image} alt={person.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { isLoading, error, show } = this.props;

    return (
      <div>
        {isLoading ? (
          <div>Получение данных...</div>
        ) : error ? (
          <p>{error}</p>
        ) : (
          this.renderShow(show)
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  show: getShow(state),
  isLoading: isLoading(state),
  error: error(state)
});

const mapDispatchToProps = {
  getShowRequest
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShowPage)
);