import { isAxiosError } from 'axios';
import { FormEvent, useEffect, useState } from 'react';
import requestApi from '../../api/axios';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import TextCard from '../../components/TextCard';
import TextInput from '../../components/TextInput';
import { useUpdateContext } from '../../contexts/UpdateContext';
import useUsers from '../../hooks/useUsers';
import { readUser } from '../../services/localStorage';
import * as Styled from './styles';

export default function TransactionForm() {
  const [responseMessage, setResponseMessage] = useState('');
  const [transactionData, setTransactionData] = useState({
    creditedUsername: '',
    debitedUsername: '',
    loading: false,
    value: '',
  });
  const { triggerUpdate } = useUpdateContext();
  const { users } = useUsers();

  const { creditedUsername, loading } = transactionData;

  useEffect(() => {
    setTransactionData((prev) => ({
      ...prev,
      debitedUsername: readUser()?.username,
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

      triggerUpdate();
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
      triggerUpdate();
    }
  };

  return (
    <Styled.Container onSubmit={handleSubmit}>
      <section>
        <TextInput
          datalist={users}
          handleChange={({ target: { value } }) => {
            setTransactionData((prev) => ({
              ...prev,
              creditedUsername: value,
            }));
          }}
          placeholder="Transferir para..."
          value={creditedUsername}
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
      </section>
      <section>
        <Button disabled={+transactionData.value <= 0} type="submit">
          Realizar transferência
        </Button>
      </section>
      {loading && <Loading />}
    </Styled.Container>
  );
}
