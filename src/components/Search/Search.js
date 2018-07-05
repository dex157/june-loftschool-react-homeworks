import React, { PureComponent } from 'react';
import { searchRequest } from '../../actions/search';
import { connect } from 'react-redux';
import { getSearchFetchState,  getSearchError } from '../../selectors/searchSelectors';

class Search extends PureComponent {
    state = {
        inputValue: ''
    };
    
    fetchDataSearch = () => {
        this.props.searchRequest(this.state.inputValue);
        this.setState({inputValue: ''});
    };

    handleInputChange = (e) => {
        this.setState({inputValue: e.target.value});
    };

    sendRequestOnEnter = (e) => {
        if (e.key === 'Enter') {
            this.fetchDataSearch();
        }
    };
    
    render () {
        const { inputValue } = this.state,
            { isFetching, error } = this.props;

        if (isFetching) {
            return <p>Выполняется поиск</p>
        }

        if (error) {
            return <p>Произошла сетевая ошибка</p>
        }

        return (
            <div className="serials__search">
                <input 
                    value={inputValue}
                    placeholder="Название сериала"
                    onChange={this.handleInputChange}
                    onKeyPress={this.sendRequestOnEnter}>
                </input>
                <button onClick={this.fetchDataSearch}>Найти</button>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    isFetching: getSearchFetchState(state),
    error: getSearchError(state)
});

const mapDispatchToProps = { searchRequest };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);