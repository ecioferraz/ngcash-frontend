import { Meta, Story } from '@storybook/react/types-6-0';
import TransactionsTable from '.';

export default {
  args: { children: 'TransactionsTable' },
  argTypes: { children: { type: 'string' } },
  component: TransactionsTable,
  title: 'Templates/TransactionsTable',
} as Meta;

export const Template: Story = (args) => <TransactionsTable {...args} />;
