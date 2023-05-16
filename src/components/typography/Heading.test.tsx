import React from 'react';
import { render } from '@testing-library/react';
import Header from './Heading';

describe('Header', () => {
  test('renders with default props', () => {
    const { getByText } = render(<Header level="h1">Hello World</Header>);
    expect(getByText('Hello World')).toBeInTheDocument();
    expect(getByText('Hello World').tagName).toBe('H1');
    expect(getByText('Hello World')).toHaveClass('color-white');
  });

  test('renders with custom class', () => {
    const { getByText } = render(
      <Header level="h2" className="custom-class">
        Custom Header
      </Header>
    );
    expect(getByText('Custom Header')).toBeInTheDocument();
    expect(getByText('Custom Header').tagName).toBe('H2');
    expect(getByText('Custom Header')).toHaveClass('color-white');
    expect(getByText('Custom Header')).toHaveClass('custom-class');
  });
});
