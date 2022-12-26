import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';
import requestApi from '../../api/axios';
import TextCard from '../../components/TextCard';
import { readUser } from '../../services/localStorage';
import * as Styled from './styles';

export default function BalanceCard() {
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

        setBalance((+data).toFixed(2).replace('.', ','));
      } catch (err) {
        if (isAxiosError(err)) setError(err.response?.data.message);
      }
    };

    getBalance();
  }, []);

  return (
    <Styled.Container>
      <TextCard as="h6" size="small">
        Saldo
      </TextCard>
      <TextCard as="p" size="small">
        {`R$ ${balance}` || error}
      </TextCard>
    </Styled.Container>
  );
}
