import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ShowPreview from 'components/ShowPreview';
import { getSeriesRequest } from 'actions/search';

class Search extends Component {

    state = {
        filmName: ''
    }

    onInputChange = e => {
        const { value } = e.target;

        this.setState(() => ({
            filmName: value
        }));
    }

    render() {
        const { getRequest, search, testRequest } = this.props;
        const { filmName } = this.state;

        return (
            <div>
                <input onChange={this.onInputChange} value={filmName} type="text" placeholder="Название сериала"/>
                <button onClick={() => {
                        getRequest(filmName);
                        this.setState(() => ({
                            filmName: ''
                        }));
                    }
                }>
                    Найти
                </button>
                <div className="t-search-result">
                {
                    search.map(({id, image, name, summary}) => (
                        <ShowPreview 
                            key={id} 
                            {...{ image, name, id, summary }} 
                        />
                    ))
                }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    search: state.search
});

const mapDispatchToProps = dispatch => ({
    getRequest: payload => dispatch(getSeriesRequest(payload))
});

export default withRouter(
    connect(
        mapStateToProps, 
        mapDispatchToProps
    )(Search)
);