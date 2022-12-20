import { Meta, Story } from '@storybook/react/types-6-0';
import Heading from '.';
import HeadingProps from './HeadingProps';

export default {
  args: { children: 'Heading' },
  argTypes: { children: { type: 'string' } },
  title: 'Components/Heading',
  component: Heading,
} as Meta;

export const Template: Story<HeadingProps> = (args) => <Heading {...args} />;
