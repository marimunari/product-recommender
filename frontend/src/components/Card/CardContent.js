// system
import React from 'react';

function CardContent({ children, ariaLabel, ...props }) {
  return (
    <section
      aria-label={ariaLabel}
      {...props}
      className={`p-4 ${props.className || ''}`}
    >
      {children}
    </section>
  );
}

export default CardContent;