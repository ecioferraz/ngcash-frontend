import Router from 'next/router';
import { useEffect } from 'react';
import useBalance from '../hooks/useBalance';
import { readUser } from '../services/localStorage';
import BalanceCard from '../templates/BalanceCard';
import Header from '../templates/Header';
import TransactionForm from '../templates/TransactionForm';
import TransactionsTable from '../templates/TransactionsTable';

export default function Account() {
  const { balance, error } = useBalance();

  useEffect(() => {
    readUser() ? null : Router.push('/login');
  }, []);

  return (
    <main>
      <Header />
      <BalanceCard balance={balance} error={error} />
      <TransactionForm />
      <TransactionsTable />
    </main>
  );
}
