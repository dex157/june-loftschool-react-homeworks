import { show } from 'api';
import { getShowRequest, getShowSuccess, getShowFailure } from 'actions/show';

export default store => next => action => {
  if (action.type === getShowRequest.toString()) {
    show(action.payload)
      .then(show => {
        const { name, summary, _embedded } = show;
        const image = show.image && show.image.medium;
        const cast = _embedded.cast.map(({ person }) => ({
          name: person.name,
          image: person.image && person.image.medium
        }));
        return store.dispatch(getShowSuccess({ name, summary, cast, image }));
      })
      .catch(error => {
        store.dispatch(getShowFailure(error.toString()));
      });
  }

  return next(action);
};
