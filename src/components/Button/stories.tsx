import { Meta, Story } from '@storybook/react/types-6-0';
import Button from '.';
import ButtonProps from './ButtonProps';

export default {
  args: { children: 'Button' },
  argTypes: { children: { type: 'string' } },
  title: 'Button',
  component: Button,
} as Meta;

export const Template: Story<ButtonProps> = (args) => <Button {...args} />;
