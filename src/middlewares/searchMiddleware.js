import {
  getSearchRequest,
  getSuccesshSearchRequest,
  getFailureSearchRequest
} from '../actions/search.js';

import { search } from '../api.js';

const searchMiddleware = store => next => action => {
  if (action.type === getSearchRequest.toString()) {
    const result = search(21);
    store.dispatch(getSuccesshSearchRequest(result));
  }

  return next(action);
};

export default searchMiddleware;
