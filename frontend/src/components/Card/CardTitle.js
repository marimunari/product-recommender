// system
import React from 'react';

function CardTitle({ as: Tag = 'h3', children, ...props }) {
  return (
    <Tag {...props} className={`text-lg font-semibold leading-none tracking-tight ${props.className || ''}`}>
      {children}
    </Tag>
  );
}

export default CardTitle;
