import { ArrowDropDown, ArrowDropUp } from '@styled-icons/material-outlined';
import { useState } from 'react';
import Button from '../../components/Button';
import Select from '../../components/Select';
import Table from '../../components/Table';
import TextCard from '../../components/TextCard';
import { useUpdateContext } from '../../contexts/Update.context';
import useTransactions from '../../hooks/useTransactions';
import OrderBy from '../../types/OrderBy';
import TransactionTypes from '../../types/TransactionTypes';
import * as Styled from './styles';

export default function TransactionsTable() {
  const [type, setType] = useState<TransactionTypes>('all');
  const [orderBy, setOrderBy] = useState<OrderBy>('desc');
  const [showMore, setShowMore] = useState(true);
  const { update } = useUpdateContext();
  const { error, loading, transactions } = useTransactions(
    orderBy,
    type,
    update,
  );

  const renderedTransactions = showMore
    ? transactions.slice(0, 10)
    : transactions;

  const moreOrLessButton = showMore ? 'Mostrar mais' : 'Mostrar menos';

  const handleMoreOrLessButton = () => setShowMore(!showMore);

  const handleOrderByChange = () =>
    setOrderBy((prev) => (prev === 'desc' ? 'asc' : 'desc'));

  const handleTypeChange = (value: TransactionTypes) => setType(value);

  return (
    <Styled.Container>
      <TextCard size="large" uppercase>
        Histórico de transações
      </TextCard>
      {!transactions.length && !error && !loading ? (
        <TextCard as="p" size="small">
          Você ainda não realizou transações.
        </TextCard>
      ) : error ? (
        <TextCard as="p" size="small">
          {error}
        </TextCard>
      ) : (
        <>
          <Styled.Filters>
            <Styled.Order>
              <TextCard as="p" size="small">
                Tipo:
              </TextCard>
              <Select
                handleChange={({ target: { value } }) =>
                  handleTypeChange(value as TransactionTypes)
                }
              />
            </Styled.Order>
            <Styled.Order>
              <TextCard as="p" size="small">
                Ordenar por data:
              </TextCard>
              <Button handleClick={handleOrderByChange}>
                {orderBy === 'desc' ? <ArrowDropDown /> : <ArrowDropUp />}
              </Button>
            </Styled.Order>
          </Styled.Filters>
          <Table data={renderedTransactions} loading={loading} />
          {transactions.length >= 10 ? (
            <Button handleClick={handleMoreOrLessButton}>
              {moreOrLessButton}
            </Button>
          ) : null}
        </>
      )}
    </Styled.Container>
  );
}
