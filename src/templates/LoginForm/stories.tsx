import { Meta, Story } from '@storybook/react/types-6-0';
// import LoginFormProps from './LoginFormProps';
import LoginForm from '.';

export default {
  component: LoginForm,
  title: 'Templates/LoginForm',
} as Meta;

export const Template: Story = (args) => <LoginForm {...args} />;
