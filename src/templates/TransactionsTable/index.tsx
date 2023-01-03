import { ArrowDropDown, ArrowDropUp } from '@styled-icons/material-outlined';
import { useState } from 'react';
import Button from '../../components/Button';
import Select from '../../components/Select';
import Table from '../../components/Table';
import TextCard from '../../components/TextCard';
import useTransactions from '../../hooks/useTransactions';
import OrderBy from '../../types/OrderBy';
import TransactionTypes from '../../types/TransactionTypes';
import * as Styled from './styles';

export default function TransactionsTable() {
  const [type, setType] = useState<TransactionTypes>('all');
  const [orderBy, setOrderBy] = useState<OrderBy>('desc');
  const { error, loading, transactions } = useTransactions(orderBy, type);

  return (
    <Styled.Container>
      <TextCard>Histórico de transações</TextCard>
      {error ? (
        <TextCard>{error}</TextCard>
      ) : (
        <>
          <Select
            handleChange={({ target: { value } }) =>
              setType(value as TransactionTypes)
            }
          />
          <Button
            handleClick={() =>
              setOrderBy((prev) => (prev === 'desc' ? 'asc' : 'desc'))
            }
          >
            {orderBy === 'desc' ? <ArrowDropDown /> : <ArrowDropUp />}
          </Button>
          <Table data={transactions} />
        </>
      )}
    </Styled.Container>
  );
}
