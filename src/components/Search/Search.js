import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { searchRequest } from '../../actions/search';
import { withRouter } from 'react-router-dom';
import ShowPreview from '../ShowPreview';
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
    const { result, isFetching, error } = this.props;

    isFetching && <p>Идёт поиск...</p>;
    error && <p>Что то пошло не так</p>;

    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.searchVal}
        />
        <button onClick={this.onSubmit}>Найти</button>
        <div className="t-search-result">
          {result &&
            result.map(film => <ShowPreview key={film.id} {...film} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.search.isFetching,
  result: state.search.result,
  error: state.search.error
});

const mapDispatchToProps = {
  searchRequest
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search)
);
