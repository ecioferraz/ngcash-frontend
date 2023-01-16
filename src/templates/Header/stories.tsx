import { Meta, Story } from '@storybook/react/types-6-0';
import Header from '.';

export default {
  component: Header,
  title: 'Templates/Header',
} as Meta;

export const Template: Story = (args) => <Header {...args} />;
