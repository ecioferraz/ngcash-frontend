import { Meta, Story } from '@storybook/react/types-6-0';
import ImageCardProps from './ImageCard.props';
import ImageCard from '.';

export default {
  args: {
    altText: 'Random image',
    src: 'https://source.unsplash.com/random/100x100?=1',
  },
  argTypes: { altText: { type: 'string' }, src: { type: 'string' } },
  component: ImageCard,
  title: 'Components/ImageCard',
} as Meta;

export const Template: Story<ImageCardProps> = (args) => (
  <ImageCard {...args} />
);
