import {
  searchRequest,
  searchRequestSuccess,
  searchRequestFailure
} from '../actions/search';
import { search } from '../api';

const searchMiddleware = store => next => action => {
  if (action.type === searchRequest.toString()) {
    search(action.payload)
      .then(shows => {
        shows = shows.map(res => ({
          id: res.id === null ? null : res.id,
          name: res.name === null ? null : res.name,
          image: res.image === null ? null : res.image.medium,
          summary: res.summary === null ? null : res.summary
        }));
        store.dispatch(searchRequestSuccess(shows));
      })
      .catch(error => {
        store.dispatch(searchRequestFailure(error));
      });
  }

  return next(action);
};

export default searchMiddleware;
