import {
  getShowsRequest,
  getShowsFailure,
  getShowsSuccess
} from '../actions/search';
import { search } from '../api';

export const searchMiddleware = store => next => action => {
  if (action.type === getShowsRequest.toString()) {
    search(action.payload).then(
      function(shows) {
        store.dispatch(getShowsSuccess(shows, shows.length));
      },
      function(error) {
        store.dispatch(getShowsFailure(error));
      }
    );
  }

  return next(action);
};
