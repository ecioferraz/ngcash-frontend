import SerializedTransactions from '../types/SerializedTransactions';
import Transactions from '../types/Transactions';
import formatToReal from '../utils/formatToReal';

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
