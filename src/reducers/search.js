import { handleActions } from 'redux-actions';
import { searchRequest, searchSuccess } from 'actions/search';

const search = handleActions(
  {
    [searchSuccess.toString()]: (state, action) => action.payload,
    [searchRequest.toString()]: (state, action) => state
  },
  []
);

export default search;
