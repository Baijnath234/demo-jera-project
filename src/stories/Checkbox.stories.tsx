import React, { useState }

  from 'react'; import { Meta, StoryFn } from '@storybook/react';
import { CheckBox } from './Checkbox';
import { userEvent, within } from '@storybook/testing-library';
export default
  {
    title: 'Component/CheckBox',
    component: CheckBox, tags: ['autodocs'],
  } satisfies Meta<typeof CheckBox>;
const Template: StoryFn<{
  onClick(onClick: any): unknown; label: string, checked: boolean
}> = (args) => {
  const [checked, setChecked] = useState(false);
  return <CheckBox {...args}
    checked={checked}
    onChange={setChecked}
  />;
};
export const Default = Template.bind({});
Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  userEvent.click(canvas.getByRole("checkbox"));
  expect(args.onClick).toHaveBeenCalled();
};
Default.args = { checked: true, label: 'CheckBox label', };
