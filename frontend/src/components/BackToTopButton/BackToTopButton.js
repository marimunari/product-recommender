// system
import React, { useState, useEffect } from 'react';

// external icons
import { HiChevronUp } from 'react-icons/hi';

function BackToTopButton() {
  // State that determines whether the button is visible
  const [visible, setVisible] = useState(false);

  /**
   * Effect responsible for listening to scroll events
   * and toggling the visibility of the button accordingly.
   */
  useEffect(() => {
    function onScroll() {
      setVisible(window.pageYOffset > 300);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /**
   * Method responsible for scrolling the page back to the top smoothly.
   *
   * @returns {void}
   */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-[#003c5b] text-white shadow-lg transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Voltar ao topo"
      title="Voltar ao topo"
    >
      <HiChevronUp size={24} />
    </button>
  );
}

export default BackToTopButton;
