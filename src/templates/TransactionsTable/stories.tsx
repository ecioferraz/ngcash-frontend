import { Meta, Story } from '@storybook/react/types-6-0';
import TransactionsTable from '.';
import { transactionsMock } from './tests/mocks';
import TransactionTableProps from './TransactionsTable.props';

export default {
  args: {
    error: '',
    loading: false,
    transactions: transactionsMock,
  },
  argTypes: {
    error: { type: 'string' },
    loading: { type: 'boolean' },
    transactions: [{ type: 'string' }],
  },
  component: TransactionsTable,
  title: 'Templates/TransactionsTable',
} as Meta;

export const Template: Story<TransactionTableProps> = (args) => (
  <TransactionsTable {...args} />
);
