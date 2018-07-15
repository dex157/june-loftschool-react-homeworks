import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showRequest } from '../../actions/showActions';

export class ShowPage extends Component {
  constructor(props) {
    super(props);

    this.props.showRequest(this.props.match.params.id);
  }

  render() {
    const { isFetching, show } = this.props;

    return (
      <div className="ShowPage">
        {isFetching ? (
          <div>
            <p>Загрузка...</p>
          </div>
        ) : (
          <div>
            <div className="ShowPage_title" key={show.id}>
              {show.name}
              <br />
              {show.image && <img src={show.image.medium} alt={show.name} />}
              <br />
              {show._embedded &&
                show._embedded.cast &&
                show._embedded.cast.map(this.Person)}
            </div>
          </div>
        )}
      </div>
    );
  }

  Person = ({ person }) => (
    <div className="ShowPage_persons" key={person.id}>
      {person.name}
      <br />
      {person.image && <img src={person.image.medium} alt={person.name} />}
    </div>
  );
}

const mapStateToProps = state => ({
  isFetching: state.shows.isFetching,
  show: state.shows.show
});

const mapDispatchToProps = {
  showRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
