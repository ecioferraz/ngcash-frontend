import { Meta, Story } from '@storybook/react/types-6-0';
import HeadingProps from './HeadingProps';
import Heading from '.';

export default {
  args: { children: 'Heading' },
  argTypes: { children: { type: 'string' } },
  component: Heading,
  title: 'Heading',
} as Meta;

export const Template: Story<HeadingProps> = (args) => <Heading {...args} />;
