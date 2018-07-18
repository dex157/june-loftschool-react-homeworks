import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { showRequest } from '../../ducks/shows';
import './ShowPage.css';

class ShowPage extends PureComponent {
  componentWillMount() {
    this.props.showRequest(this.props.match.params.id);
  }
  render() {
    const { error, isFetching, result } = this.props;

    if (error) return this.errorRender();
    if (isFetching) return this.loadingRender();

    return (
      <div className="show-page">
        <div className="title">
          <h3 className="series-title">{result.name}</h3>
          {result.image && (
            <img width="300px" src={result.image.original} alt={result.name} />
          )}
        </div>
        <div dangerouslySetInnerHTML={{ __html: result.summary }} />
        <div>
          <ul>
            {result._embedded &&
              result._embedded.cast.map((el, index) => (
                <li className="t-person" key={index}>
                  <p>{el.person.name}</p>
                  {el.person.image && (
                    <img
                      width="250px"
                      height="350px"
                      src={el.person.image.original}
                      alt={el.person.name}
                    />
                  )}
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }

  errorRender = () => <p>При загрузке данных произошла ошибка</p>;
  loadingRender = () => <p>Данные загружаются...</p>;
}

const mapStateToProps = state => ({
  isFetching: state.shows.isFetching,
  result: state.shows.result,
  error: state.shows.error
});
const mapDispatchToProps = { showRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
