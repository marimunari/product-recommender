// system
import React from 'react';

function SubmitButton({ children, disabled, className, ...props }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`px-8 py-3 text-lg font-semibold flex items-center justify-center gap-2 rounded-md
        bg-[#003c5b] text-white
        transition duration-300
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#003c5b]
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#00587a]'}
        ${className ?? ''}
      `}
      {...props}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
}

export default SubmitButton;