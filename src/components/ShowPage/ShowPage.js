import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getShowData,
  showIsLoaded,
  showIsFailure,
  showIsLoading
} from '../../selectors';

import { showRequest } from '../../actions/show';

class ShowPage extends Component {
  render() {
    const { showRequest, dataShow, match } = this.props;
    const id = match.params.id;
    showRequest(id);


    return (
      <div>
        {showIsLoading && <p>Данные загружаются...</p>}
        {showIsFailure && (
          <p>Произошла ошибка, пожалуйста, перезагрузите страницу</p>
        )}
        {showIsLoaded && (
          <div>
            <p>{dataShow.name}</p>
            <img src={dataShow.image.medium} alt={dataShow.name} />
            <div><p dangerouslySetInnerHTML={{ __html: dataShow.summary }} /></div>
            <div>
              {dataShow.persons.map(element => {
                return (
                  <div>
                    <p>{element.name}</p>
                    <img src={element.image} alt={element.name} />
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
