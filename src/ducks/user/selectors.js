export const getIsFetching = state => state.user.isFetching;

export const getUser = state => {
  const user = state.user.data;
  console.log('user:', user);

  if (!user) {
    return null;
  }

  const { avatar_url, login, followers, public_repos } = user;

  return { avatar_url, login, followers, public_repos };
};
