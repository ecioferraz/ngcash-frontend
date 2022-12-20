import { Meta, Story } from '@storybook/react/types-6-0';
import TextInput from '.';
import TextInputProps from './TextInputProps';

export default {
  component: TextInput,
  title: 'Components/TextInput',
} as Meta;

export const Template: Story<TextInputProps> = (args) => (
  <TextInput {...args} />
);
