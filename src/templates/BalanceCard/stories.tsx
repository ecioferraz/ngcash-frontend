import { Meta, Story } from '@storybook/react/types-6-0';
import BalanceCard from '.';
import BalanceCardProps from './BalanceCard.props';

export default {
  args: { balance: '100,00', error: '', loading: false },
  argTypes: {
    balance: { type: 'string' },
    error: { type: 'string' },
    loading: { type: 'boolean' },
  },
  component: BalanceCard,
  title: 'Templates/BalanceCard',
} as Meta;

export const Template: Story<BalanceCardProps> = (args) => (
  <BalanceCard {...args} />
);
