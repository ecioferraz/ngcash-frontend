import { Meta, Story } from '@storybook/react/types-6-0';
import Loading from '.';

export default {
  component: Loading,
  title: 'Components/Loading',
} as Meta;

export const Template: Story = (args) => <Loading {...args} />;
