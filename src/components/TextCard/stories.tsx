import { Meta, Story } from '@storybook/react/types-6-0';
import TextCard from '.';
import TextCardProps from './TextCardProps';

export default {
  args: { children: 'TextCard' },
  argTypes: { children: { type: 'string' } },
  title: 'Components/TextCard',
  component: TextCard,
} as Meta;

export const Template: Story<TextCardProps> = (args) => <TextCard {...args} />;
