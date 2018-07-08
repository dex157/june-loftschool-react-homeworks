import React from 'react';
import { connect } from 'react-redux';
import { getPageRequest } from './pageActions';
import './ShowPage.css';

class ShowPage extends React.PureComponent {
  state = {
    id: null,
    name: null,
    image: null,
    summary: null
  };

  componentDidMount() {
    const showId = this.props.match.params.id;
    this.setState({
      id: showId
    });

    const currentPage = this.getPageById(showId);

    if (currentPage) {
      this.setState({
        name: currentPage.name,
        image: currentPage.image,
        summary: currentPage.summary
      });
    } else {
      this.props.getPageRequest(showId);
    }
  }

  getPageById(showId) {
    const { entities } = this.props;
    return entities.find(item => item.id.toString() === showId);
  }

  render() {
    const { id } = this.state;
    const currentPage = this.getPageById(id);

    if (!currentPage) {
      return <div>Загружается</div>;
    }

    const { image, name, summary, _embedded } = currentPage;

    return (
      <div className="show-page">
        <h1 className="show-page__header">{name}</h1>
        {image && (
          <img src={image.original} alt={name} className="show-page__image" />
        )}
        <p
          className="show-page__summary"
          dangerouslySetInnerHTML={{ __html: summary }}
        />
        {_embedded &&
          _embedded.cast && (
            <ul className="t-person__list">
              {_embedded.cast.map(item => {
                return (
                  <li className="t-person" key={item.person.id}>
                    <div className="t-person__name">{item.person.name}</div>
                    {item.person.image && (
                      <img
                        src={
                          item.person.image.medium || item.person.image.original
                        }
                        alt={item.person.name}
                        className="t-person__image"
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.shows.isFetching,
  entities: state.shows.entities
});
const mapDispatchToProps = { getPageRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
