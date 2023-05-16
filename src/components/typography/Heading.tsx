import React from 'react';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps {
  /**
   * The HTML tag to use for the heading.
   */
  level: HeadingTag;
  /**
   * The content to display inside the heading.
   */
  children: React.ReactNode;
  /**
   * Additional CSS classes to apply to the heading.
   */
  className?: string;
}

/**
 * The `Heading` component displays a heading with a given level (HTML tag) and content.
 */
const Heading: React.FC<HeadingProps> = ({ level, children, className }) => {
  const HeadingTag = `${level}` as HeadingTag;
  return (
    <HeadingTag className={`color-white ${className}`}>{children}</HeadingTag>
  );
};

export default Heading;
