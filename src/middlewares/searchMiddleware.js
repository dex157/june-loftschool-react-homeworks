import {
  getSearchRequest,
  getSuccessSearchRequest,
  getFailureSearchRequest
} from '../actions/search.js';

import { search } from '../api';

const searchMiddleware = store => next => action => {
  if (action.type === getSearchRequest.toString()) {
    search(action.payload)
      .then(result => {
        store.dispatch(getSuccessSearchRequest(result));
      })
      .catch(error => {
        store.dispatch(getFailureSearchRequest(error));
      });
  }

  return next(action);
};

export default searchMiddleware;
