import { isAxiosError } from 'axios';
import { FormEvent, useState } from 'react';
import requestApi from '../../api/axios';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import { readUser } from '../../services/localStorage';
import * as Styled from './styles';

export default function TransactionForm() {
  const [transactionData, setTransactionData] = useState({
    loading: false,
    creditedUsername: '',
    debitedUsername: '',
    value: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { token, username: debitedUsername } = readUser();
      setTransactionData((prev) => ({
        ...prev,
        debitedUsername,
        loading: true,
      }));

      await requestApi({
        endpoint: 'transactions',
        method: 'post',
        body: transactionData,
        token,
      });
    } catch (err) {
      if (isAxiosError(err)) setError(err.response?.data.message);
    }
  };

  return (
    <Styled.Container onSubmit={handleSubmit}>
      <TextInput
        handleChange={({ target: { value } }) => {
          setTransactionData((prev) => ({ ...prev, creditedUsername: value }));
        }}
        placeholder="Transferir para..."
      />
      <TextInput
        handleChange={({ target: { value } }) => {
          setTransactionData((prev) => ({ ...prev, value }));
        }}
        placeholder="Valor (R$)"
      />
      <Button type="submit">Realizar transferência</Button>
    </Styled.Container>
  );
}
