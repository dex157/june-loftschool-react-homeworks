import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.github.com/'
});

export const setTokenApi = access_token => {
  instance.defaults.params = { access_token };
};

export const clearTokenApi = () => {
  instance.defaults.params = { access_token: undefined };
};

export const getUserInformation = login => instance(`users/${login}`);
export const getUserFollowers = login =>
  instance(`users/${login}/followers?pages=1&per_page=100`);
export const getUserRepos = login => instance(`users/${login}/repos`);
export const getTokenOwner = () => instance('user');
