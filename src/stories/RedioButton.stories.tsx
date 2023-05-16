import { Meta, StoryFn } from '@storybook/react';
import { Radio, RadioProps } from './RedioButton';
import { action } from '@storybook/addon-actions';
import { expect } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';
export default {
    title: 'Component/Redio',
    component: Radio,
  } as Meta;
  
  const Template: StoryFn<RadioProps> = (args) => <Radio {...args} />;
  
  export const Default = Template.bind({});
  Default.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
   userEvent.click(canvas.getByRole("radio"));
     expect(args.onChange).toHaveBeenCalled();
    };
  Default.args = {
    label: 'Option 1',
    value: 'option1',
    onChange: action('onChange'),
  };
  
  export const Checked = Template.bind({});
  Checked.args = {
    label: 'Option 2',
    value: 'option2',
    checked: true,
    onChange: action('onChange'),
  };

  