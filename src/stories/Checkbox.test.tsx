import { render, screen, fireEvent } from "@testing-library/react";
import { CheckBox}  from "./Checkbox";

describe("Checkbox component", () => {
  it("should render", () => {
    render(<CheckBox label="test label" checked={false} onChange={() => {}} />);
    expect(screen.getByTestId("input-checkbox")).toBeInTheDocument();
  });

  it("should call the onChange handler when clicked", () => {
    const handleChange = jest.fn();
    render(<CheckBox label="test label" checked={false} onChange={handleChange} />);
    const checkbox = screen.getByTestId("input-checkbox");
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
