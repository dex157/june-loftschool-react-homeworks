import { handleActions } from 'redux-actions';
import {
    getSeriesRequest,
    getSeriesSuccess,
    getSeriesFailure,
} from 'actions/search';

const search = handleActions(
    {
        [getSeriesSuccess.toString()]: (state, action) => action.payload, 
        [getSeriesRequest.toString()]: (state, action) => state
    },
    []
);

export default search;