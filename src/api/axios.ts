import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/';

type AxiosProps = {
  endpoint: string;
  method: 'get' | 'post' | 'put' | 'patch' | 'delete';
  body?: object;
  id?: string;
  token?: string;
};

export default async function requestApi({
  endpoint,
  method,
  body,
  id,
  token,
}: AxiosProps) {
  return axios(endpoint, {
    data: body,
    headers: { Authorization: `Bearer ${token}` },
    method,
    params: id || body,
  });
}
