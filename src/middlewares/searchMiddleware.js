import { searchRequest, searchSuccess, searchFailure } from '../actions/search';
import { search } from '../api';

const searchMiddleware = store => next => action => {
  if (action.type === searchRequest.toString()) {
    search(action.payload)
      .then(result => {
        console.log(result);
        store.dispatch(searchSuccess(result));
      })
      .catch(error => {
        console.log(error);
        store.dispatch(searchFailure(error));
      });
  }

  return next(action);
};

export default searchMiddleware;
