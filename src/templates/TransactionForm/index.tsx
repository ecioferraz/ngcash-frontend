import { isAxiosError } from 'axios';
import { FormEvent, useEffect, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import requestApi from '../../api/axios';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import TextCard from '../../components/TextCard';
import TextInput from '../../components/TextInput';
import { useAccountContext } from '../../contexts/Account.context';
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
  const { triggerUpdate } = useAccountContext();
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

    try {
      const { token } = readUser();
      setTransactionData((prev) => ({ ...prev, loading: true }));
      setResponseMessage('');

      await requestApi({
        endpoint: 'transactions',
        method: 'post',
        body: {
          ...transactionData,
          value: transactionData.value.replace(',', '.'),
        },
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
        <CurrencyInput
          className="currency-input"
          decimalScale={2}
          intlConfig={{ currency: 'BRL', locale: 'pt-BR' }}
          placeholder="Valor (R$)"
          onValueChange={(value) =>
            setTransactionData((prev) => ({
              ...prev,
              value: value as string,
            }))
          }
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
