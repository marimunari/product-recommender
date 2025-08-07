// system
import React from 'react';

function Card({ children, className = '', ...props }) {
  return (
    <article
      {...props}
      className={`bg-white border rounded-lg shadow-card text-card-foreground p-6 ${className}`}
      role={props.role || 'region'}
      aria-label={props['aria-label'] || 'Card de conteúdo'}
    >
      {children}
    </article>
  );
}

export default Card;