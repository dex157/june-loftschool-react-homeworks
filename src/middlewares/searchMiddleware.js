import { searchRequest, searchSuccess, searchFailure } from '../ducks/search';

import { search } from '../api.js';

export default store => next => action => {
  if (action.type === searchRequest.toString()) {
    search(action.payload)
      .then(series => {
        store.dispatch(searchSuccess(series));
      })
      .catch(err => {
        store.dispatch(searchFailure(err));
      });
  }

  return next(action);
};
