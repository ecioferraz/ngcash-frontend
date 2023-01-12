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

export default Transactions;
