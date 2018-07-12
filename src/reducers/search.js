import {
  searchRequest,
  searchRequestSuccess,
  searchRequestFailure
} from '../actions/search';

const search = (
  state = { isFetching: false, result: [], error: null },
  action
) => {
  switch (action.type) {
    case searchRequest.toString():
      return { ...state, isFetching: true };
    case searchRequestSuccess.toString():
      return {
        ...state,
        isFetching: false,
        error: null,
        result: action.payload
      };
    case searchRequestFailure.toString():
      return { ...state, error: action.payload, isFetching: false };
    default:
      return state;
  }
};

export default search;
