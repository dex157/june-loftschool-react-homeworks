export const getIsFetching = state => state.users.isFetching;
export const getIsFetched = state => state.users.isFetched;

export const getUserData = state => {
  const { login, avatar_url, followers, public_repos } = state.users.data;
  return {
    name: login,
    url: avatar_url,
    followersCount: followers,
    reposCount: public_repos
  };
};
