import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tab } from './Tab';

describe('Tab', () => {
  const labels = ['About', 'Product', 'Projects'];
  const children = [
    <div key="about">About Content</div>,
    <div key="product">Product Content</div>,
    <div key="projects">Projects Content</div>,
  ];

  it('renders the tab labels and shows corresponding content on click', () => {
    render(<Tab labels={labels} children={children} />);
    const tabItems = screen.getAllByRole('listitem'); // Get the <li> elements instead

    // Check if all tab labels are rendered
    tabItems.forEach((tabItem, index) => {
      const tabLabel = screen.getByText(labels[index]);
      expect(tabLabel).toBeInTheDocument();
      expect(tabItem).toContainElement(tabLabel);
    });

    // Check if the default active content is rendered
    const defaultContent = screen.getByText('About Content');
    expect(defaultContent).toBeInTheDocument();

    // Click on the second tab
    const secondTab = tabItems[1];
    fireEvent.click(secondTab);

    // Check if the second tab becomes active
    expect(secondTab).toHaveClass('uk-active');

    // Check if the corresponding content is rendered
    const secondContent = screen.getByText('Product Content');
    expect(secondContent).toBeInTheDocument();
  });
});
