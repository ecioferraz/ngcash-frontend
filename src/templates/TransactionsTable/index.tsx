import { ArrowDropDown, ArrowDropUp } from '@styled-icons/material-outlined';
import { useState } from 'react';
import Button from '../../components/Button';
import Select from '../../components/Select';
import Table from '../../components/Table';
import TextCard from '../../components/TextCard';
import { useAccountContext } from '../../contexts/Account.context';
import TransactionTypes from '../../types/TransactionTypes';
import * as Styled from './styles';
import TransactionTableProps from './TransactionsTable.props';

export default function TransactionsTable({
  error,
  loading,
  transactions = [],
}: TransactionTableProps) {
  const [showMore, setShowMore] = useState(true);
  const { handleOrderByChange, handleTypeChange, orderBy } =
    useAccountContext();

  const renderedTransactions = showMore
    ? transactions.slice(0, 10)
    : transactions;

  const moreOrLessButton = showMore ? 'Mostrar mais' : 'Mostrar menos';

  const handleMoreOrLessButton = () => setShowMore(!showMore);

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
                {orderBy === 'desc' ? (
                  <ArrowDropDown name="drop-down" />
                ) : (
                  <ArrowDropUp name="drop-up" />
                )}
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
