import Router from 'next/router';
import { useEffect } from 'react';
import { readUser } from '../services/localStorage';
import BalanceCard from '../templates/BalanceCard';
import Header from '../templates/Header';
import TransactionForm from '../templates/TransactionForm';
import TransactionsTable from '../templates/TransactionsTable';

export default function Account() {
  useEffect(() => {
    readUser() ? null : Router.push('/login');
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="account-page">
          <BalanceCard />
          <TransactionForm />
        </section>
        <TransactionsTable />
      </main>
    </>
  );
}
