import {
  showRequest,
  showRequestSuccess,
  showRequestFailure
} from '../actions/show';

const show = (
  state = { isFetching: false, entities: [], error: null },
  action
) => {
  switch (action.type) {
    case showRequest.toString():
      return { ...state, isFetching: true };
    case showRequestSuccess.toString():
      return { ...state, isFetching: false, entities: action.payload };
    case showRequestFailure.toString():
      return { ...state, isFetching: false, error: 'shit' };
    default:
      return state;
  }
};

export default show;
