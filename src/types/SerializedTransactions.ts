import TransactionTypes from './TransactionTypes';

type SerializedTransactions = {
  date: string;
  id: string;
  username: string;
  type: TransactionTypes;
  value: string;
};

export default SerializedTransactions;
