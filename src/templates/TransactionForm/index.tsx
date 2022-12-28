import { isAxiosError } from 'axios';
import { FormEvent, useState } from 'react';
import requestApi from '../../api/axios';
import Button from '../../components/Button';
import TextCard from '../../components/TextCard';
import TextInput from '../../components/TextInput';
import { readUser } from '../../services/localStorage';
import * as Styled from './styles';

export default function TransactionForm() {
  const [transactionData, setTransactionData] = useState({
    loading: false,
    creditedUsername: '',
    debitedUsername: readUser().username,
    value: '',
  });
  const [responseMessage, setResponseMessage] = useState('');

  const { token } = readUser();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setTransactionData((prev) => ({ ...prev, loading: true }));
      setResponseMessage('');

      await requestApi({
        endpoint: 'transactions',
        method: 'post',
        body: transactionData,
        token,
      });

      setResponseMessage('Transação concluída!');
    } catch (err) {
      if (isAxiosError(err)) setResponseMessage(err.response?.data.message);
    } finally {
      setTransactionData((prev) => ({ ...prev, loading: false }));
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
      {responseMessage && (
        <TextCard as="p" size="xsmall">
          {responseMessage}
        </TextCard>
      )}
      <Button type="submit">Realizar transferência</Button>
    </Styled.Container>
  );
}
