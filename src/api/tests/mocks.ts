export const dataMock = [
  {
    id: 'id',
    creditedAccountId: 'accountId1',
    debitedAccountId: 'accountId2',
    value: '5',
    createdAt: '2023-01-10T18:13:23.099Z',
    creditedAccount: {
      user: {
        username: 'username1',
      },
    },
    debitedAccount: {
      user: {
        username: 'username2',
      },
    },
  },
  {
    id: 'id2',
    creditedAccountId: 'accountId2',
    debitedAccountId: 'accountId1',
    value: '5',
    createdAt: '2023-01-10T14:47:45.780Z',
    creditedAccount: {
      user: {
        username: 'username2',
      },
    },
    debitedAccount: {
      user: {
        username: 'username1',
      },
    },
  },
];

export const serializedMock = [
  {
    date: '10/01/2023 15:13:23',
    id: 'id',
    username: 'username1',
    type: 'cash-out',
    value: 'R$ 5,00',
  },
  {
    date: '10/01/2023 11:47:45',
    id: 'id2',
    username: 'username1',
    type: 'cash-in',
    value: 'R$ 5,00',
  },
];
