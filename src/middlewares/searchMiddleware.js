import { search } from '../api';
import { searchRequest, searchSuccess, searchFailure } from '../actions/search';

const searchMiddleware = store => next => action => {
  if (action.type === searchRequest.toString()) {
    search(action.payload)
      .then(series => {
        series = series.map(ep => ({
          id: ep.id,
          name: ep.name,
          image: ep.image.medium,
          summary: ep.summary
        }));
        store.dispatch(searchSuccess(series));
      })
      .catch(error => {
        store.dispatch(searchFailure(error));
      });
  }

  return next(action);
};

export default searchMiddleware;
