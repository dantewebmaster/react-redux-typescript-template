import axios from 'axios';

const usersApi = axios.create({
  baseURL: 'https://randomuser.me/api/',
});

export function getUsers() {
  return usersApi.get('?results=30&nat=br,us');
}
