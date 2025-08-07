// system
import React from 'react';

function Tag({ children, variant = 'primary' }) {
  // Base Tailwind CSS classes applied to all tag variants.
  const baseClasses = 'text-xs px-2 py-1 rounded-full font-medium';

  /**
   * Tailwind CSS class variants for different tag styles.
   * - `primary`: Blue background with dark text.
   * - `success`: Green background with dark green text.
   */
  const variants = {
    primary: 'bg-[#e5f3ff] text-[#003c5b]',
    success: 'bg-[#f0f9f4] text-green-700',
  };

  return (
    <span className={`${baseClasses} ${variants[variant] || variants.primary}`}>
      {children}
    </span>
  );
}

export default Tag;
