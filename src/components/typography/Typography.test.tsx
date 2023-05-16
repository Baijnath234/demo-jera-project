import React from 'react';
import { render } from '@testing-library/react';
import Typography from './Typography';

describe('Typography', () => {
  test('renders Typography with DIV tag', () => {
    const { getByText } = render(
      <Typography tag="div">Div Example</Typography>
    );
    expect(getByText('Div Example')).toBeInTheDocument();
    expect(getByText('Div Example')?.tagName?.toLowerCase()).toBe('div');
  });

  test('renders Typography with SPAN tag', () => {
    const { getByText } = render(
      <Typography tag="span">Span Example</Typography>
    );
    expect(getByText('Span Example')).toBeInTheDocument();
    expect(getByText('Span Example')?.tagName?.toLowerCase()).toBe('span');
  });

  test('renders Typography with P tag', () => {
    const { getByText } = render(
      <Typography tag="p">P Example</Typography>
    );
    expect(getByText('P Example')).toBeInTheDocument();
    expect(getByText('P Example')?.tagName?.toLowerCase()).toBe('p');
  });
});
