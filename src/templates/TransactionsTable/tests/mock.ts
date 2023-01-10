import TransactionTypes from '../../../types/TransactionTypes';

export const transactionsMock = [
  {
    date: new Date().toLocaleString(),
    id: 'id1',
    username: 'username1',
    type: 'cash-in' as TransactionTypes,
    value: '5.00',
  },
  {
    date: new Date().toLocaleString(),
    id: 'id2',
    username: 'username2',
    type: 'cash-out' as TransactionTypes,
    value: '5.00',
  },
];
