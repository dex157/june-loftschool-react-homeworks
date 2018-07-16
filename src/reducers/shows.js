import {
  showRequest,
  showRequestSuccess,
  showRequestFailure
} from '../actions/show';

const show = (
  state = { isFetching: false, entities: [], error: null, isFetched: false },
  action
) => {
  switch (action.type) {
    case showRequest.toString():
      return { ...state, isFetching: true, isFetched: false };
    case showRequestSuccess.toString():
      return {
        ...state,
        isFetching: false,
        entities: action.payload,
        isFetched: true
      };
    case showRequestFailure.toString():
      return { ...state, isFetching: false, error: 'shit', isFetched: true };
    default:
      return state;
  }
};

export default show;
