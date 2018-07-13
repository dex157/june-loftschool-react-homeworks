import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { searchRequest } from 'actions/search';
import ShowPreview from '../ShowPreview';
import './Search.css';
import { withRouter } from 'react-router-dom';

class Search extends PureComponent {
  state = {
    inputValue: ''
  };

  handleClick = () => {
    const { searchRequest } = this.props;
    searchRequest(this.state.inputValue);
  };

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    const { serials, error, isLoading } = this.props;
    if (isLoading) {
      return <p>Выполняется поиск</p>;
    }
    if (error) {
      return <p>Произошла сетевая ошибка</p>;
    }

    return (
      <div>
        <div>
          <input
            value={this.state.inputValue}
            placeholder="название сериала"
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Найти</button>
        </div>
        <div className="t-search-result">
          {serials.map((serial, i) => (
            <ShowPreview key={serial.name + i} {...serial} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.search.isLoading,
  serials: state.search.serials,
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
