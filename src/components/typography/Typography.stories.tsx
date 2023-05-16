import { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';

const meta: Meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    tag: {
      control: {
        type: 'select',
        options: ['div', 'span', 'p'],
      },
    },
    children: {
      control: 'text',
      default: 'Hello World!'
    },
    className: {
      control: 'text',
    },
  },
} as Meta;

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    tag: 'div',
    children: 'Hello World!',
  },
};

export const Span = {
  args: {
    tag: 'span',
    children: 'Hello World!',
  },
};

export const Paragraph = {
  args: {
    tag: 'p',
    children: 'Hello World!',
  },
};
