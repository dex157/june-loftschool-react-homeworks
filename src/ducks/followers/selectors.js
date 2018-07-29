export const getIsFetching = state => state.followers.isFetching;

export const getFollowers = state => {
  const followers = state.followers.data;
  return !followers
    ? null
    : followers.map(({ login, avatar_url }) => ({
        name: login,
        url: avatar_url
      }));
};
