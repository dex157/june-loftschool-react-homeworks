import { handleActions } from 'redux-actions';
import { showRequest, showSuccess, showFailure } from '../actions/show';

export default handleActions(
  {
    [showRequest.toString()]: state => ({
      ...state,
      isFetching: true
    }),
    [showSuccess.toString()]: (state, action) => ({
      ...state,
      isFetching: false,
      entity: action.payload
    }),
    [showFailure.toString()]: state => ({
      ...state,
      isFetching: false
    })
  },
  { entity: {}, isFetching: false }
);
