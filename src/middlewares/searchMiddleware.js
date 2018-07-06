import { search } from 'api';
import { searchSuccess, searchRequest, searchFailure } from 'actions/search';

export default store => next => action => {
  if (action.type === searchRequest.toString()) {
    search(action.payload)
      .then(series => {
        return store.dispatch(
          searchSuccess(
            series.map(el => ({
              image: el.image && el.image.medium,
              name: el.name,
              id: el.id,
              summary: el.summary
            }))
          )
        );
      })
      .catch(error => {
        store.dispatch(searchFailure(error.toString()));
      });
  }

  return next(action);
};
