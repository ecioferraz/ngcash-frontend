import { Meta, Story } from '@storybook/react/types-6-0';
import TextCard from '.';
import TextCardProps from './TextCard.props';

export default {
  args: { as: 'h1', children: 'TextCard', size: 'huge', uppercase: false },
  argTypes: { children: { type: 'string' }, uppercase: { type: 'boolean' } },
  title: 'Components/TextCard',
  component: TextCard,
} as Meta;

export const Template: Story<TextCardProps> = (args) => <TextCard {...args} />;
