import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('renders the heading and paragraph correctly', () => {
    const heading = 'Card Heading';
    const paragraph = 'This is a card paragraph.';
    render(<Card Heading={heading} Paragraph={paragraph} />);

    // Check if the heading is rendered correctly
    const headingElement = screen.getByText(heading);
    expect(headingElement).toBeInTheDocument();

    // Check if the paragraph is rendered correctly
    const paragraphElement = screen.getByText(paragraph);
    expect(paragraphElement).toBeInTheDocument();
  });
});
