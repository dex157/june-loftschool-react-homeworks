import { createSelector } from 'reselect';

export const getSearchFetchState = state => state.search.isFetching;
export const getSearchError = state => state.search.error;
export const getSerials = createSelector(
  state => state.search.serials,
  serials =>
    serials.map(serial => ({
      id: serial.id,
      name: serial.name,
      image: serial.image,
      summary: serial.summary
    }))
);
