import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ShowPage.css';

import { showRequest } from '../../actions/show';

function getShowData(state) {
  console.log(state);
  const { id, image, name, summary, _embedded } = state.shows.result;
  return {
    id: id,
    image: image ? image : null,
    name: name,
    summary: summary,
    persons: _embedded ? getPersons(_embedded) : ''
  };
}
function getPersons(persons) {
  return persons.cast.map(element => {
    return element.person;
  });
}

const mapStateToProps = state => ({
  dataShow: getShowData(state),
  showIsLoaded: state.shows.loadingState === 'SUCCESS',
  showIsFailure: state.shows.loadingState === 'FAILURE',
  showIsLoading: state.shows.loadingState === 'LOADING'
});

class ShowPage extends Component {
  constructor(props) {
    super(props);
    this.props.showRequest(this.props.match.params.id);
  }

  render() {
    const { dataShow, showIsLoading, showIsFailure, showIsLoaded } = this.props;

    return (
      <div>
        {showIsLoading && <p>Данные загружаются...</p>}
        {showIsFailure && (
          <p>Произошла ошибка, пожалуйста, перезагрузите страницу</p>
        )}
        {showIsLoaded && (
          <div>
            <p>{dataShow.name}</p>
            {dataShow.image !== null && (
              <img
                src={dataShow.image.medium}
                alt={dataShow.name}
                className="preview__image"
              />
            )}
            <div>
              <p dangerouslySetInnerHTML={{ __html: dataShow.summary }} />
            </div>
            <div className="t-row">
              {dataShow.persons.map(({ name, image, id }) => {
                return (
                  <div className="t-person" key={id}>
                    <p>{name}</p>
                    {image !== null && (
                      <img
                        src={image.medium}
                        alt={name}
                        className="preview__image"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = { showRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
