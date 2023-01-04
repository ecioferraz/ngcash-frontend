import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';
import requestApi from '../api/axios';
import { readUser } from '../services/localStorage';
import formatToReal from '../utils/formatToReal';

export default function useBalance() {
  const [balance, setBalance] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const getBalance = async () => {
      try {
        const { accountId, username, token } = readUser();
        const { data } = await requestApi({
          endpoint: 'accounts/balance',
          method: 'get',
          body: { accountId, username },
          token,
        });

        setBalance(formatToReal(+data));
      } catch (err) {
        if (isAxiosError(err)) setError(err.response?.data.message);
      }
    };

    getBalance();
  }, []);

  return { balance, error };
}
