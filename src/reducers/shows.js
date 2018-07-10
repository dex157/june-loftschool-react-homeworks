import { showRequest, showSuccess, showFailure } from '../actions/show';

const initilState = {
  isFetching: false,
  entities: [],
  error: null
};

const shows = (state = initilState, action) => {
  switch (action.type) {
    case showRequest.toString():
      return { ...state, isFetching: true };
    case showSuccess.toString():
      return {
        ...state,
        entities: action.payload,
        isFetching: false
      };
    case showFailure.toString():
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};

export default shows;
