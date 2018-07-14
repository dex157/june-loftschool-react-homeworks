import './Search.css'
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {searchRequest} from 'actions/search';
import ShowPreview from 'components/ShowPreview'

export class Search extends Component {
    state = {
        searchVal: ''
    };

    handleChangeVal = event => {
        this.setState({
            searchVal: event.target.value
        });
    };

    handleSearchClick = () => {
        this.setState({
            searchVal: ''
        });
        this.props.searchRequest(this.state.searchVal);
    };

    handleSearchOnEnter = event => {
        return (event.key === 'Enter' && this.state.searchVal !== '') && this.handleSearchClick();
    };

    render() {
        const {result, isFetching, error} = this.props;

        if (isFetching) {
            return <p>Выполняется поиск</p>;
        }

        if (error) {
            return <p>Произошла ошибка: {error}</p>;
        }

        return (
            <Fragment>
                <div className='search'>
                    <input type='text'
                           placeholder='введите название'
                           autoFocus={true}
                           onChange={this.handleChangeVal}
                           onKeyPress={this.handleSearchOnEnter}
                           value={this.state.searchVal}
                    />
                    <button onClick={this.handleSearchClick}>Найти</button>
                </div>

                <div className="result t-search-result">
                    {result.map(series => (
                        <ShowPreview
                            key={series.id}
                            name={series.name}
                            image={series.image && series.image.medium}
                            id={series.id}
                            summary={series.summary}
                        />
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

const mapDispatchToProps = {
    searchRequest
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
