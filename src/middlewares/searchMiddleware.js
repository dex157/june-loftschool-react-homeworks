import { searchRequest, searchSuccess, searchFailure } from '../actions/search';

import { search } from '../api';

const searchMiddleware = store => next => action => {
  if (action.type === searchRequest.toString()) {
    const data = action.payload;
    search(data)
      .then(result => {
        store.dispatch(searchSuccess(result));
      })
      .catch(error => {
        store.dispatch(searchFailure(error));
      });
  }

  return next(action);
};

export default searchMiddleware;
