import { createSelector } from 'reselect'

export const getData = createSelector(
  state => state.followers.data,
  data =>
    !data || !data.length
      ? null
      : data.map(follower => ({
          id: follower.id,
          name: follower.login,
          avatar: follower.avatar_url
        }))
)

export const getIsFetching = state => state.followers.fetching
export const getError = state => state.followers.error