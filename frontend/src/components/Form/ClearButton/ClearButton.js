// system
import React from 'react';

function ClearButton({ children, onClick, className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-6 py-3 text-lg font-semibold flex items-center justify-center rounded-md
        bg-gray-200 text-gray-800
        transition duration-300
        hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400
        ${className ?? ''}
      `}
    >
      {children}
    </button>
  );
}

export default ClearButton;
