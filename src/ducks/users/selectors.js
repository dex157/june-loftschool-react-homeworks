export const getUserData = state => {
  const user = state.users.data;
  if (user == null) {
    return null;
  }

  const { avatar_url, login, followers, public_repos } = user;

  return { avatar_url, login, followers, public_repos };
};

export const getIsFetched = state => state.users.isFetched;
