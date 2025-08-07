// system
import React from 'react';

function CardDescription({ children, id, ...props }) {
  return (
    <p
      id={id}
      {...props}
      className={`text-sm text-card-foreground/70 mt-1 ${props.className || ''}`}
    >
      {children}
    </p>
  );
}

export default CardDescription;