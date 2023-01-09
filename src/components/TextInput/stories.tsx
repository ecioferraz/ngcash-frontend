import { Meta, Story } from '@storybook/react/types-6-0';
import TextInput from '.';
import TextInputProps from './TextInput.props';

export default {
  args: {
    datalist: ['user1', 'user2'],
    minLength: 8,
    placeholder: 'TextInput',
    uppercase: false,
  },
  argTypes: {
    datalist: [{ type: 'string' }],
    minLength: { type: 'number' },
    placeholder: { type: 'string' },
    uppercase: { type: 'boolean' },
  },
  component: TextInput,
  title: 'Components/TextInput',
} as Meta;

export const Template: Story<TextInputProps> = (args) => (
  <TextInput {...args} />
);
