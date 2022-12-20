import { Meta, Story } from '@storybook/react/types-6-0';
import TextInputProps from './TextInputProps';
import TextInput from '.';

export default {
  args: { children: 'TextInput' },
  argTypes: { children: { type: 'string' } },
  component: TextInput,
  title: 'TextInput',
} as Meta;

export const Template: Story<TextInputProps> = (args) => (
  <TextInput {...args} />
);
