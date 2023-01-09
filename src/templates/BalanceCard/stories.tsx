import { Meta, Story } from '@storybook/react/types-6-0';
import BalanceCard from '.';

export default {
  component: BalanceCard,
  title: 'Templates/BalanceCard',
} as Meta;

export const Template: Story = (args) => <BalanceCard {...args} />;
