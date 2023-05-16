import React from 'react';

type ElementTag = 'div' | 'span' | 'p';

export interface TypographyProps {
  /** HTML tag to be used for the Typography element */
  tag: ElementTag;
  /** Content to be displayed inside the Typography element */
  children: React.ReactNode;
  /** Additional CSS class name(s) to be applied to the Typography element */
  className?: string;
}

/**
 * A reusable Typography component that renders a basic text element with customizable HTML tag and styling.
 */
const Typography: React.FC<TypographyProps> = ({
  tag,
  children,
  className,
}) => {
  const ElementTag = tag;
  return <ElementTag className={className}>{children}</ElementTag>;
};

export default Typography;
