import { Meta, Story } from '@storybook/react/types-6-0';
import SelectProps from './SelectProps';
import Select from '.';

export default {
  args: { children: 'Select' },
  argTypes: { children: { type: 'string' } },
  component: Select,
  title: 'Components/Select',
} as Meta;

export const Template: Story<SelectProps> = (args) => <Select {...args} />;
