import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from '../Select.stories';

const {SingleSelect, Disable} = composeStories(stories)

describe('Select', () => {
  it('renders correctly', () => {
    render(<SingleSelect data-test-id="select" />);
    expect(screen.getByTestId('select')).toBeInTheDocument();
  });

  it('displays the label correctly', () => {
    render(<SingleSelect data-test-id="select" />);
    expect(screen.getByText(SingleSelect.args.label?.toString() || 'Select')).toBeInTheDocument();
  });

  // it('displays the options correctly', () => {
  //   render(<Select data-test-id="select" options={options} />);
  //   const select = screen.getByTestId('select');
  //   fireEvent.mouseDown(select);
  //   options.forEach(option => {
  //     expect(screen.getByText(option.label)).toBeInTheDocument();
  //   });
  // });

  // it('calls onChange callback with selected value', () => {
  //   const onChange = jest.fn();
  //   const selectedValue = options[1].value;
  //   render(<Select data-test-id="select" options={options} onChange={onChange} />);
  //   const select = screen.getByTestId('select');
  //   fireEvent.mouseDown(select);
  //   fireEvent.click(screen.getByText(options[1].label));
  //   expect(onChange).toHaveBeenCalledWith(selectedValue);
  // });

  it('renders as disabled when disabled prop is true', () => {
    render(<Disable data-test-id="select" />);
    expect(screen.getByTestId('select')).toHaveClass('disabled');
  });

  // it('does not select a value that does not match any option', () => {
  //   const onChange = jest.fn();
  //   render(<Select data-test-id="select" options={options} onChange={onChange} value="non-existent" />);
  //   const select = screen.getByTestId('select');
  //   expect(select).toHaveValue('');
  //   fireEvent.mouseDown(select);
  //   fireEvent.click(screen.getByText(options[0].label));
  //   expect(onChange).toHaveBeenCalledWith(options[0].value);
  //   expect(select).toHaveValue(options[0].value);
  // });

  // it('displays custom no options message when there are no options available', () => {
  //   const noOptionsMessage = 'No options available';
  //   render(<Select data-test-id="select" options={[]} noOptionsMessage={noOptionsMessage} />);
  //   const select = screen.getByTestId('select');
  //   fireEvent.mouseDown(select);
  //   expect(screen.getByText(noOptionsMessage)).toBeInTheDocument();
  // });
});

