import { isAxiosError } from 'axios';
import { FormEvent, useEffect, useState } from 'react';
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
    debitedUsername: '',
    value: '',
  });
  const [responseMessage, setResponseMessage] = useState('');

  useEffect(() => {
    setTransactionData((prev) => ({
      ...prev,
      debitedUsername: readUser().username,
    }));
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { token } = readUser();

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
      setTransactionData((prev) => ({
        ...prev,
        creditedUsername: '',
        value: '',
      }));
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
        value={transactionData.creditedUsername}
      />
      <TextInput
        handleChange={({ target: { value } }) => {
          setTransactionData((prev) => ({
            ...prev,
            value: value.replace(',', '.'),
          }));
        }}
        placeholder="Valor (R$)"
        value={transactionData.value}
      />
      {responseMessage && (
        <TextCard as="p" size="xsmall">
          {responseMessage}
        </TextCard>
      )}
      <Button disabled={+transactionData.value <= 0} type="submit">
        Realizar transferência
      </Button>
    </Styled.Container>
  );
}
