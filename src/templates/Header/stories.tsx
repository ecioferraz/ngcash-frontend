import { Meta, Story } from '@storybook/react/types-6-0';
// import HeaderProps from './HeaderProps';
import Header from '.';

export default {
  args: { children: 'Header' },
  argTypes: { children: { type: 'string' } },
  component: Header,
  title: 'Header',
} as Meta;

export const Template: Story = (args) => <Header {...args} />;
