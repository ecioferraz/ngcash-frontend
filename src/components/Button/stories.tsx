import { Meta, Story } from '@storybook/react/types-6-0';
import Button from '.';
import ButtonProps from './Button.props';

export default {
  args: { children: 'Button', disabled: false, type: 'button' },
  argTypes: { children: { type: 'string' }, disabled: { type: 'boolean' } },
  title: 'Components/Button',
  component: Button,
} as Meta;

export const Template: Story<ButtonProps> = (args) => <Button {...args} />;
