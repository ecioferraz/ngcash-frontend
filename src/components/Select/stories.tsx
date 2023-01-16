import { Meta, Story } from '@storybook/react/types-6-0';
import SelectProps from './Select.props';
import Select from '.';

export default {
  component: Select,
  title: 'Components/Select',
} as Meta;

export const Template: Story<SelectProps> = (args) => <Select {...args} />;
