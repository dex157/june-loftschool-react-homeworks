import React, { Component, Fragment } from 'react';
import { searchRequest } from 'actions/search';
import { connect } from 'react-redux';
import ShowPreview from '../ShowPreview';

class Search extends Component {
  state = {
    searchString: ''
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ searchString: value });
  };

  fetchData = () => {
    const { searchString } = this.state;

    if (searchString !== '') {
      this.props.searchRequest(searchString);
      this.setState({ searchString: '' });
    } else {
      alert('Прийдется что-то написать!))');
    }
  };

  render() {
    const { searchString } = this.state;
    const { isFetching, result, error } = this.props;

    if (isFetching) {
      return <p>Выполняется поиск</p>;
    }

    if (error) {
      return <p>Произошла сетевая ошибка</p>;
    }

    return (
      <Fragment>
        <div className="sc-bxivhb kayeln">
          <input
            onChange={this.handleChange}
            value={searchString}
            placeholder="Название сериала"
          />
          <button onClick={this.fetchData}>Найти</button>
        </div>
        <div className="t-search-result sc-htpNat kRtOTp">
          {result.map(({ id, name, image, summary }) => (
            <ShowPreview key={id} {...{ id, name, image, summary }} />
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.search.isFetching,
  result: state.search.result,
  error: state.search.error
});

const mapDispatchToProps = { searchRequest: search => searchRequest(search) };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
