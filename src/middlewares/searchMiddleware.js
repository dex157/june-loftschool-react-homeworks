import { searchFailure, searchRequest, searchSuccess } from '../actions/search';
import { search } from '../api';

export default store => next => action => {
  if (action.type === searchRequest.toString()) {
    search(action.payload)
      .then(result => store.dispatch(searchSuccess(result)))
      .catch(result => store.dispatch(searchFailure(result)));
  }
  return next(action);
};
