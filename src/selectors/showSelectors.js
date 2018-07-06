import { createSelector } from 'reselect';

export const getShowFetchState = state => state.shows.isFetching;
export const getShowError = state => state.shows.error;
export const getChosenSerial = createSelector(
  state => state.shows.entities,
  chosenSerial =>
    Object.assign(
      {},
      {
        name: chosenSerial.name,
        image: chosenSerial.image,
        summary: chosenSerial.summary,
        _embedded: chosenSerial._embedded
      }
    )
);
