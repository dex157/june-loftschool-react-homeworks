import React, { PureComponent } from 'react';
import ShowPreview from '../ShowPreview';
import { connect } from 'react-redux';
import { searchRequest } from '../../ducks/search';

class Search extends PureComponent {
  state = {
    tvSeriesTitle: ''
  };

  handleChange = e => {
    this.setState({ tvSeriesTitle: e.target.value });
  };

  handleClick = () => {
    this.props.searchRequest(this.state.tvSeriesTitle);
  };
  render() {
    const { isFetching, result, error } = this.props;

    if (error) return this.errorRender();
    if (isFetching) return this.loadingRender();

    return (
      <div>
        <div className="search">
          <input
            type="text"
            placeholder="Название сериала"
            onChange={this.handleChange}
          />
          <button
            disabled={!this.state.tvSeriesTitle}
            onClick={this.handleClick}
          >
            Найти
          </button>
        </div>
        <div className="tv-series">
          {result.map((elem, index) => (
            <ShowPreview
              key={index}
              id={elem.id}
              name={elem.name}
              image={elem.image ? elem.image.original : null}
              summary={elem.summary}
            />
          ))}
        </div>
      </div>
    );
  }

  errorRender = () => <p>При загрузке данных произошла ошибка</p>;
  loadingRender = () => <p>Данные загружаются...</p>;
}

const mapStateToProps = state => ({
  isFetching: state.search.isFetching,
  result: state.search.result,
  error: state.search.error
});
const mapDispatchToProps = { searchRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
