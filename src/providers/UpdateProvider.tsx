import { PropsWithChildren, useState } from 'react';
import { AccountContext } from '../contexts/Account.context';
import OrderBy from '../types/OrderBy';
import TransactionTypes from '../types/TransactionTypes';

export default function UpdateProvider({ children }: PropsWithChildren) {
  const [orderBy, setOrderBy] = useState<OrderBy>('desc');
  const [type, setType] = useState<TransactionTypes>('all');
  const [update, setUpdate] = useState(false);

  const handleOrderByChange = () =>
    setOrderBy((prev) => (prev === 'desc' ? 'asc' : 'desc'));

  const handleTypeChange = (value: TransactionTypes) => setType(value);

  const triggerUpdate = () => setUpdate(!update);

  return (
    <AccountContext.Provider
      value={{
        handleOrderByChange,
        handleTypeChange,
        orderBy,
        type,
        triggerUpdate,
        update,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}
