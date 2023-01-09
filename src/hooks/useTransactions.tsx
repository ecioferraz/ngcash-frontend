import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';
import requestApi from '../api/axios';
import serializeTransactions from '../api/serializeTransactions';
import { readUser } from '../services/localStorage';
import OrderBy from '../types/OrderBy';
import SerializedTransactions from '../types/SerializedTransactions';
import TransactionTypes from '../types/TransactionTypes';

export default function useTransactions(
  orderBy: OrderBy,
  type: TransactionTypes,
  update: boolean,
) {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState<SerializedTransactions[]>(
    [],
  );

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const { accountId, username, token } = readUser();

        const { data } = await requestApi({
          endpoint: 'transactions',
          method: 'get',
          body: { accountId, username, type, orderBy },
          token,
        });

        setTransactions(serializeTransactions(data, accountId));
      } catch (err) {
        if (isAxiosError(err)) setError(err.response?.data.message);
      } finally {
        setLoading(false);
      }
    };

    getTransactions();
  }, [orderBy, type, update]);

  return { loading, transactions, error };
}
