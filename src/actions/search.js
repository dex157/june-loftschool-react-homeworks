import { createActions } from 'redux-actions';

const { 
    getSeriesRequest, 
    getSeriesSuccess, 
    getSeriesFailure 
} = createActions({
    GET_SERIES_REQUEST: null, 
    GET_SERIES_SUCCESS: null, 
    GET_SERIES_FAILURE: null
})

export { getSeriesRequest, getSeriesSuccess, getSeriesFailure };