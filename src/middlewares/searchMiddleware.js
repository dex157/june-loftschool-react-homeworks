import { search } from '../api';
import {
  searchRequest,
  searchSuccess,
  searchFailure
} from '../actions/searchActions';

export default store => next => action => {
  if (action.type === searchRequest.toString()) {
    const query = action.payload;
    search(query)
      .then(series => {
        store.dispatch(searchSuccess(series));
      })
      .catch(e => {
        store.dispatch(searchFailure(e.toString()));
      });
  }

  return next(action);
};
