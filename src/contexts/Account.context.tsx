import { createContext, useContext } from 'react';
import AccountContextType from './AccountContextType';

export const AccountContext = createContext<AccountContextType>({
  handleOrderByChange: () => {
    return;
  },
  handleTypeChange: () => {
    return;
  },
  orderBy: 'desc',
  triggerUpdate: () => {
    return;
  },
  type: 'all',
  update: false,
});

export const useAccountContext = () => useContext(AccountContext);
