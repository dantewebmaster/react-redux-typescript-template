import axios from 'axios';

export const githubApi = axios.create({
  baseURL: 'https://api.github.com',
});

export function getRepositories() {
  return githubApi.get('users/dantewebmaster/repos');
}
