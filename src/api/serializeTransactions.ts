import SerializedTransactions from '../types/SerializedTransactions';
import formatToReal from '../utils/formatToReal';

type Account = { user: { username: string } };

type Transactions = {
  createdAt: string;
  creditedAccount: Account;
  creditedAccountId: string;
  debitedAccount: Account;
  debitedAccountId: string;
  id: string;
  value: string;
};

const serializeTransactions = (
  data: Transactions[],
  accountId: string,
): SerializedTransactions[] =>
  data.map((transaction) => {
    const {
      createdAt,
      creditedAccount,
      creditedAccountId,
      debitedAccount,
      id,
      value,
    } = transaction;

    return {
      date: new Date(createdAt).toLocaleString(),
      id,
      username:
        creditedAccountId === accountId
          ? debitedAccount.user.username
          : creditedAccount.user.username,
      type: creditedAccountId === accountId ? 'cash-in' : 'cash-out',
      value: formatToReal(+value),
    };
  });

export default serializeTransactions;
