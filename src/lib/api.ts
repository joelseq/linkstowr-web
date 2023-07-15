import axios from 'axios';
import { PUBLIC_BASE_API_URL } from '$env/static/public';

export const getAPI = (jwt?: string) =>
  axios.create({
    baseURL: PUBLIC_BASE_API_URL,
    timeout: 10000,
    headers: jwt ? { Authorization: `Bearer ${jwt}` } : undefined,
  });
