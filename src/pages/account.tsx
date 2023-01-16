import Router from 'next/router';
import { useEffect } from 'react';
import { useAccountContext } from '../contexts/Account.context';
import useBalance from '../hooks/useBalance';
import useTransactions from '../hooks/useTransactions';
import { readUser } from '../services/localStorage';
import BalanceCard from '../templates/BalanceCard';
import Header from '../templates/Header';
import TransactionForm from '../templates/TransactionForm';
import TransactionsTable from '../templates/TransactionsTable';

export default function Account() {
  const { orderBy, type, update } = useAccountContext();
  const {
    balance,
    error: balanceError,
    loading: balanceLoading,
  } = useBalance(update);
  const {
    error: transactionsError,
    loading: transactionsLoading,
    transactions,
  } = useTransactions(orderBy, type, update);

  useEffect(() => {
    readUser() ? null : Router.push('/login');
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="account-page">
          <BalanceCard
            balance={balance}
            error={balanceError}
            loading={balanceLoading}
          />
          <TransactionForm />
        </section>
        <TransactionsTable
          error={transactionsError}
          loading={transactionsLoading}
          transactions={transactions}
        />
      </main>
    </>
  );
}
