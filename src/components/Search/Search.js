import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { searchRequest } from '../../actions/search';
import { withRouter } from 'react-router-dom';
import { format } from 'url';

class Search extends PureComponent {
  state = {
    searchVal: ''
  };

  handleChange = e => {
    this.setState({
      searchVal: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const { searchRequest } = this.props;
    const { searchVal } = this.state;
    searchRequest(searchVal);
  };
  render() {
    return (
      <form action="">
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.searchVal}
        />
        <button>Найти</button>
      </form>
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
