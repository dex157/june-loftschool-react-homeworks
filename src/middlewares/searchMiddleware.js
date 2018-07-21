import { searchRequest, searchSuccess, searchFailure } from '../actions/search';
import { search } from '../api';

export default store => next => action => {
  if (action.type === searchRequest.toString()) {
    search(action.payload)
      .then(series => {
        store.dispatch(searchSuccess(series));
      })
      .catch(error => {
        store.dispatch(searchFailure(error));
      });
  }

  return next(action);
};
