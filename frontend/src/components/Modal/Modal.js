// system
import React from 'react';

// internal components
import { Tag } from '../../components';

// external icons
import { AiOutlineClose } from 'react-icons/ai';

export function Modal({ product, onClose }) {
  /**
  * Method responsible for calling the modal's close function
  * when the click occurs on the overlay (the area outside the modal's content).
  * 
  * @param {Object} e - The click event.
  * @returns {void}
  */
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={handleOverlayClick}
      data-testid="modal-content"
    >
      <div
        className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar modal"
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 focus:outline-none"
        >
          <AiOutlineClose size={24} />
        </button>

        <h2 className="text-xl font-bold text-[#003c5b] mb-4">
          #{product.id} {product.name}
        </h2>

        <p className="mb-4 text-muted-foreground">
          <strong>Categoria:</strong> {product.category}
        </p>

        <div className="mb-4">
          <p className="text-sm font-semibold text-muted-foreground mb-2">Preferências:</p>
          <div className="flex flex-wrap gap-2">
            {product.preferences.map((preference) => (
              <Tag key={preference} variant="primary">
                {preference}
              </Tag>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-muted-foreground mb-2">Funcionalidades:</p>
          <div className="flex flex-wrap gap-2">
            {product.features.map((feature) => (
              <Tag key={feature} variant="success">
                {feature}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;