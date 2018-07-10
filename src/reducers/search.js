//import { handleActions } from 'redux-actions';
import { searchRequest, searchSuccess, searchFailure } from '../actions/search';

const initilState = {
  isFetching: false,
  result: [],
  error: null
};

const search = (state = initilState, action) => {
  switch (action.type) {
    case searchRequest.toString():
      return { ...state, isFetching: true };
    case searchSuccess.toString():
      return {
        ...state,
        result: action.payload,
        isFetching: false
      };
    case searchFailure.toString():
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};

export default search;
