import { Meta, Story } from '@storybook/react/types-6-0';
import BalanceCard from '.';
import BalanceCardProps from './BalanceCardProps';

export default {
  args: { balance: '100.00' },
  argTypes: { balance: { type: 'string' } },
  component: BalanceCard,
  title: 'Templates/BalanceCard',
} as Meta;

export const Template: Story<BalanceCardProps> = (args) => (
  <BalanceCard {...args} />
);
