import {
  getSearchRequest,
  getSuccesshSearchRequest,
  getFailureSearchRequest
} from '../actions/search';

import {search} from '../api.js';

const searchMiddleware = store => next => action => {
  if (action.type === getSearchRequest.toString()) {
    search(action.payload)
      .then(result => {
        store.dispatch(getSuccesshSearchRequest(result));
      })
      .catch(error => {
        store.dispatch(getFailureSearchRequest(error));
      });
  }

  return next(action);
};

export default searchMiddleware;
