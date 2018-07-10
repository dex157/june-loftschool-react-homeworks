import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { searchRequest } from '../../actions/search';

class Search extends PureComponent {
  state = {
    searchVal: ''
  };

  handleChange = e => {
    this.setState({
      searchVal: e.target.value
    });
  };
  onClick = () => {
    const { searchRequest } = this.props;
    const { searchVal } = this.state;
    searchRequest(searchVal);
  };
  render() {
    return (
      <Fragment>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.searchVal}
        />
        <button onClick={this.onClick}>Найти</button>
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  searchRequest
};

export default connect(
  null,
  mapDispatchToProps
)(Search);
