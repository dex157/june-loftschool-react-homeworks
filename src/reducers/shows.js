import { handleActions } from 'redux-actions';
import { getShowRequest, getShowSuccess } from 'actions/show';

const show = handleActions(
  {
    [getShowSuccess.toString()]: (state, action) => action.payload,
    [getShowRequest.toString()]: (state, action) => state
  },
  {}
);

export default show;
