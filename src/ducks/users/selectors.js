export const getUserData = state => {
  const user = state.users.data

  if (user == null) {
    return null
  }

  const {
    avatar_url: avatar,
    login: name,
    following,
    public_repos: repos
  } = user

  return { avatar, name, following, repos }
}

export const getIsFetched = state => state.users.fetched