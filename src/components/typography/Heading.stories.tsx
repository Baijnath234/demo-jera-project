import { Meta, StoryObj } from '@storybook/react';
import Heading from './Heading';

const meta: Meta = {
  title: 'Components/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      },
    },
    className: {
      control: 'text',
    },
  },
} as Meta;

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    level: 'h1',
    children: 'This is a Heading',
    className: '',
  },
};
