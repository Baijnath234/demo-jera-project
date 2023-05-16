import { Meta, StoryObj } from '@storybook/react';
import { Tab } from './Tab';


const meta = {
  title: 'Example/Tab',
  component: Tab,
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof meta>;


export const Template: Story = {
  args: {
        labels: ['About','Product' , 'Projects', ],
        children:['This Is a First Tab.', 'This Is a Second Tab.', 'This Is a Third Tab.']
  },
};



