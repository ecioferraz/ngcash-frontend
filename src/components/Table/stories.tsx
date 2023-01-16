import { Meta, Story } from '@storybook/react/types-6-0';
import TableProps from './Table.props';
import Table from '.';

export default {
  args: {
    data: [
      {
        date: new Date().toLocaleString(),
        type: 'cash-in',
        username: 'username',
        value: '50,00',
      },
    ],
    loading: false,
  },
  argTypes: { data: [{ type: 'string' }], loading: { type: 'boolean' } },
  component: Table,
  title: 'Components/Table',
} as Meta;

export const Template: Story<TableProps> = (args) => <Table {...args} />;
