import { createSelector } from 'reselect';

export const getIds = createSelector(
  state => state.followers.ids,
  ids =>
    ids === null
      ? null
      : ids.map(id => ({
          id: id.id,
          login: id.login,
          avatar: id.avatar_url
        }))
);

export const getIsFetched = state => state.followers.isFetched;
export const getIsFetching = state => state.followers.isFetching;
export const getError = state => state.followers.error != null;
export const getFollowers = state => state.followers.ids;
