import { render, fireEvent } from '@testing-library/react';
import { Radio } from './RedioButton';

describe('Radio component', () => {
  it('should render a radio button with a label', () => {
    const { getByLabelText } = render(<Radio label="Option 1" value="option1" onChange={() => {}} />);
    const radioButton = getByLabelText('Option 1');
    expect(radioButton).toBeInTheDocument();
  });

  it('should call the onChange handler with the correct value when clicked', () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(<Radio label="Option 1" value="option1" onChange={handleChange} />);
    const radioButton = getByLabelText('Option 1');
    fireEvent.click(radioButton);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('option1');
  });

  it('should be checked when the checked prop is true', () => {
    const { getByLabelText } = render(<Radio label="Option 1" value="option1" checked={true} onChange={() => {}} />);
    const radioButton = getByLabelText('Option 1');
    expect(radioButton).toBeChecked();
  });
});
