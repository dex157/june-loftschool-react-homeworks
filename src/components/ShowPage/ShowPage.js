import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './ShowPage.css';
import {
  getChosenSerial,
  getShowFetchState,
  getShowError
} from '../../selectors/showSelectors';

class ShowPage extends PureComponent {
  render() {
    const { chosenSerial, isFetching, error } = this.props,
      { name, image, summary, _embedded } = chosenSerial;

      if (isFetching) {
        return <p>Выполняется поиск</p>;
      }
  
      if (error) {
        return <p>Произошла сетевая ошибка</p>;
      }

    return (
      <div className="serial-showresult">
        <h1>{name}</h1>
        {image && (
          <img
            className="serial-showresult__img"
            src={image.medium}
            alt={name}
          />
        )}
        <div
          className="serial-showresult__summary"
          dangerouslySetInnerHTML={{ __html: summary }}
        />
        <ul className="cast__list">
          {_embedded && _embedded.cast.map(this.renderCast)}
        </ul>
      </div>
    );
  }

  renderCast = ({ person }) => (
    <li className="cast__item" key={person.id}>
      <div className="cast__name">{person.name}</div>
      {person.image && (
        <img
          className="cast__img"
          src={person.image.medium}
          alt={person.name}
        />
      )}
    </li>
  );
}

const mapStateToProps = state => ({
  isFetching: getShowFetchState(state),
  error: getShowError(state),
  chosenSerial: getChosenSerial(state)
});

export default connect(mapStateToProps)(ShowPage);
