import {
  searchRequest,
  searchRequestSuccess,
  searchRequestFailure
} from '../actions/search';
import { search } from '../api';

export default store => next => action => {
  if (action.type === searchRequest.toString()) {
    search(action.payload)
      .then(series => {
        store.dispatch(searchRequestSuccess(series));
      })
      .catch(error => {
        store.dispatch(searchRequestFailure(error));
      });
  }

  return next(action);
};
