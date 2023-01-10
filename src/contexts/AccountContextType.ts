import OrderBy from '../types/OrderBy';
import TransactionTypes from '../types/TransactionTypes';

type AccountContextType = {
  handleOrderByChange: () => void;
  handleTypeChange: (type: TransactionTypes) => void;
  orderBy: OrderBy;
  triggerUpdate: () => void;
  type: TransactionTypes;
  update: boolean;
};

export default AccountContextType;
