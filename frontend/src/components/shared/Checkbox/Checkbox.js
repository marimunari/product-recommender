// system
import React from 'react';

function Checkbox({ children, id, className = '', ...props }) {
  return (
    <label
      htmlFor={id}
      className="flex items-center gap-2 cursor-pointer rounded px-2 py-1 hover:bg-[rgba(183,229,255,0.15)] transition-colors"
      style={{ alignItems: 'flex-start' }}
    >
      <input
        type={props.type || 'checkbox'}
        id={id}
        className={`flex-shrink-0 h-4 w-4 mt-1 accent-[hsl(183_75%_76%)] ${className}`}
        {...props}
      />
      <span className="text-sm font-medium text-muted-foreground">{children}</span>
    </label>
  );
}

export default Checkbox;
