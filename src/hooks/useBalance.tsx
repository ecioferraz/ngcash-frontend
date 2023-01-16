import { isAxiosError } from 'axios';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import requestApi from '../api/axios';
import { readUser, removeUser } from '../services/localStorage';
import formatToReal from '../utils/formatToReal';

export default function useBalance(update: boolean) {
  const [balance, setBalance] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getBalance = async () => {
      try {
        setLoading(true);

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
        if (error.includes('Unauthorized')) {
          removeUser();
          Router.push('login');
        }
      } finally {
        setLoading(false);
      }
    };

    getBalance();
  }, [error, update]);

  return { balance, error, loading };
}
