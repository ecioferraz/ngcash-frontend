import { Meta, Story } from '@storybook/react/types-6-0';
import TableProps from './TableProps';
import Table from '.';

export default {
  args: {
    data: [
      {
        date: new Date().toLocaleString(),
        type: 'Cash-in',
        username: 'username',
        value: '50,00',
      },
    ],
  },
  argTypes: { data: [{ type: 'string' }] },
  component: Table,
  title: 'Components/Table',
} as Meta;

export const Template: Story<TableProps> = (args) => <Table {...args} />;
