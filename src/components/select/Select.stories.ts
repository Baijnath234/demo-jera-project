import { Meta, StoryObj } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Select from './Select';
import results from '../../../.jest-test-results.json';

const options = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AS', label: 'American Samoa' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'DC', label: 'District Of Columbia' },
  { value: 'FM', label: 'Federated States Of Micronesia' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const optionsColor = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry', isDisabled: true },
  { value: 'vanilla', label: 'Vanilla' },
];

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  tags: ['autodocs'],
  component: Select,
  decorators: [withTests({ results })],
};

export default meta;
type Story = StoryObj<typeof Select>;

const selectLabel = 'Select';
export const SingleSelect: Story = {
  args: {
    label: selectLabel,
    options: options,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const selectElement = await canvas.getByRole('combobox');

    await step('Open dropdown on click', async () => {
      await userEvent.click(selectElement);
      for (const opt of args.options || []) {
        await expect(canvas.getByText(opt.label)).toBeInTheDocument();
      }
    });

    await step('Dropdown should close on selecting an option and display the selected option ', async () => {
      await userEvent.click(selectElement);
      const optionToSelect = args.options?.find((el) => !!el)?.label;
      const otherOptions = args.options?.filter(
        (el) => el.label !== optionToSelect
      );
      const selectOptionElement = await canvas.getByText(
        optionToSelect || 'Strawberry'
      );
      await userEvent.click(selectOptionElement);
      for (const opt of otherOptions || []) {
        await expect(canvas.queryByText(opt.label)).not.toBeInTheDocument();
      }
      await expect(canvas.getByText(
        optionToSelect || 'Strawberry'
      )).toBeInTheDocument();
    });

    await step('Type the search text to filter the options', async () => {
      const searchString = options[options.length - 1].label
      await userEvent.type(selectElement, searchString);
      await expect(canvas.getByText(
        searchString || 'Strawberry'
      )).toBeInTheDocument();
    });

    // await step('Scroll to bottom of options', async () => {
    //   selectElement.scrollTop = selectElement.scrollHeight;
    //   await userEvent.click(selectElement);
    // });

    await step('Select the last option', async () => {
      await waitFor(
        () => {
          const optionElement = canvas.queryByText(
            options[options.length - 1].label
          );
          if (optionElement) {
            userEvent.click(optionElement);
            return true;
          }
          return false;
        },
        { timeout: 5000 }
      );
    });
  },
};

export const SelectDefaultValue: Story = {
  args: {
    label: 'Default value',
    options: options,
    value: options[1],
  },
};

export const SelectMandatory: Story = {
  args: {
    label: 'Mandatory',
    options: options,
    isMandatory: true,
  },
};

export const MultiSelect: Story = {
  args: {
    label: 'Multi Select',
    options: options,
    isMulti: true,
  },
};

export const Placeholder: Story = {
  args: {
    label: 'Placeholder',
    options: options,
    placeholder: 'Placeholder....',
  },
};

export const Disable: Story = {
  args: {
    label: 'Disabled',
    options: options,
    disabled: true,
  },
};

export const NoOptionMessage: Story = {
  args: {
    label: 'No options',
    noOptionsMessage: 'There is no options provided',
  },
};

export const WithDisabledOptions: Story = {
  args: {
    label: 'Disable options',
    options: optionsColor,
  },
};

// export const DefaultMenuOpen: Story = {
//   args: {
//     label: 'Default menu open',
//     options: options,
//     defaultMenuIsOpen: true,
//   },
// };
