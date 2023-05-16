import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Card } from './Card';

export default {
  title: 'Example/Card',
  component: Card,
  decorators: [withKnobs], // Add the knobs decorator
} as Meta;

export const CardStory: Story = () => {
  const heading = text('Heading', 'Test-Title'); // Use the text knob for Heading
  const paragraph = text(
    'Paragraph',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.'
  ); // Use the text knob for Paragraph

  return (
    <Card Heading={heading} Paragraph={paragraph} onClick={action('Clicked')} />
  );
};

CardStory.storyName = 'Card'; // Set the story name

