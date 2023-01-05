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
      <TextCard size="large" uppercase>
        Histórico de transações
      </TextCard>
      {error ? (
        <TextCard>{error}</TextCard>
      ) : (
        <>
          <Styled.Filters>
            <Styled.Order>
              <TextCard as="p" size="small">
                Tipo:
              </TextCard>
              <Select
                handleChange={({ target: { value } }) =>
                  setType(value as TransactionTypes)
                }
              />
            </Styled.Order>
            <Styled.Order>
              <TextCard as="p" size="small">
                Ordenar por data:
              </TextCard>
              <Button
                handleClick={() =>
                  setOrderBy((prev) => (prev === 'desc' ? 'asc' : 'desc'))
                }
              >
                {orderBy === 'desc' ? <ArrowDropDown /> : <ArrowDropUp />}
              </Button>
            </Styled.Order>
          </Styled.Filters>
          <Table data={transactions} />
        </>
      )}
    </Styled.Container>
  );
}
