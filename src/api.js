import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.github.com/',
});

export const setTokenApi = access_token => {
  instance.defaults.params = { access_token };
};

export const clearTokenApi = () => {
  instance.defaults.params = { access_token: undefined };
};

export const getUserInformation = login => instance(`users/${login}`);
export const getUserFollowing = login => instance(`users/${login}/following`);
export const getUserRepos = login => instance(`users/${login}/repos`);
export const getTokenOwner = () => instance('user');
