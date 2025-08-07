// system
import React from 'react';

function CardHeader({ children, ...props }) {
  return (
    <header {...props} className={`mb-2 ${props.className || ''}`}>
      {children}
    </header>
  );
}

export default CardHeader;