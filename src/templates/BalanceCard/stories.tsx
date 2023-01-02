import { Meta, Story } from '@storybook/react/types-6-0';
import BalanceCard from '.';
import BalanceCardProps from './BalanceCardProps';

export default {
  args: { children: 'BalanceCard' },
  argTypes: { children: { type: 'string' } },
  component: BalanceCard,
  title: 'BalanceCard',
} as Meta;

export const Template: Story<BalanceCardProps> = (args) => (
  <BalanceCard {...args} />
);
