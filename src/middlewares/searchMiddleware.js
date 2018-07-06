import {
  searchRequest,
  searchSuccess,
  searchFailure
} from '../actions/search';
import { search } from '../api';

export default store => next => action => {
  if (action.type === searchRequest.toString()) {
    search(action.payload).then(
      shows => {
        try {
          store.dispatch(searchSuccess(shows, shows.length));
        } catch (e) {
          store.dispatch(searchFailure(e));
        }
      }
    );
  }

  return next(action);
};
