import SerializedTransactions from '../../types/SerializedTransactions';

type TransactionTableProps = {
  error?: string;
  loading?: boolean;
  transactions?: SerializedTransactions[];
};

export default TransactionTableProps;
