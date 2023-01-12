import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/';

type AxiosProps = {
  endpoint: string;
  method: 'get' | 'post' | 'put' | 'patch' | 'delete';
  body?: object;
  token?: string;
};

export default async function requestApi({
  endpoint,
  method,
  body,
  token,
}: AxiosProps) {
  return axios(endpoint, {
    data: body,
    headers: { Authorization: `Bearer ${token}` },
    method,
    params: body,
  });
}
