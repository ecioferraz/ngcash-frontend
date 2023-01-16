import { Meta, Story } from '@storybook/react/types-6-0';
import TransactionForm from '.';

export default {
  args: { children: 'TransactionForm' },
  argTypes: { children: { type: 'string' } },
  component: TransactionForm,
  title: 'Templates/TransactionForm',
} as Meta;

export const Template: Story = (args) => <TransactionForm {...args} />;
