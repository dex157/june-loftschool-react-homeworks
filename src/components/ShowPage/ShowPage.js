import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ShowPage.css';

import {
  getShowData,
  showIsLoaded,
  showIsFailure,
  showIsLoading
} from '../../selectors';

import { showRequest } from '../../actions/show';

class ShowPage extends Component {
  constructor(props) {
    super(props);
    const { showRequest, match } = props;
    const id = match.params.id;
    showRequest(id);
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
            <div class="t-row">
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

const mapStateToProps = state => ({
  showIsLoaded: showIsLoaded(state),
  showIsFailure: showIsFailure(state),
  showIsLoading: showIsLoading(state),
  dataShow: getShowData(state)
});

const mapDispatchToProps = { showRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
