// system
import React, { useState } from 'react';

// internal components
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
  Modal,
  Tag
} from '../../components';

// external icons
import { FiArrowRight } from 'react-icons/fi';

function RecommendationList({ recommendations }) {
  // State that holds the product currently selected for viewing in the modal
  const [selectedProduct, setSelectedProduct] = useState(null);
  // Boolean that checks if any recommendations exist
  const hasRecommendations = recommendations.length > 0;

  /**
   * Method responsible for opening the modal with the selected product details.
   *
   * @param {Object} product - The selected product.
   * @returns {void}
   */
  const handleOpenModal = (product) => {
    setSelectedProduct(product);
  };

  /**
   * Method responsible for closing the modal.
   *
   * @returns {void}
   */
  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <Card
      className="shadow-card border-border/50"
      role="region"
      aria-labelledby="recommendations-title"
    >
      <CardHeader>
        <CardTitle
          id="recommendations-title"
          className="text-[#003c5b] font-bold"
        >
          Suas Recomendações
        </CardTitle>
      </CardHeader>

      <CardDescription role="alert" className="text-muted-foreground">
        {!hasRecommendations ? 'Nenhuma recomendação encontrada.' : null}
      </CardDescription>

      {hasRecommendations && (
        <CardContent className="flex flex-col gap-6">
          {recommendations.map((product) => (
            <div
              key={product.id}
              className="border border-border rounded-md p-4 bg-white shadow-sm"
            >
              <h3 className="text-lg font-semibold text-[#003c5b] mb-2">{product.name}</h3>

              <div className="mb-2">
                <p className="text-sm font-medium text-muted-foreground mb-1">Preferências:</p>
                <div className="flex flex-wrap gap-2">
                  {product.preferences.map((preference) => (
                    <Tag key={preference} variant="primary">
                      {preference}
                    </Tag>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground mb-1">Funcionalidades:</p>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <Tag key={feature} variant="success">
                      {feature}
                    </Tag>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleOpenModal(product)}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-semibold text-[#003c5b] bg-[#e5f3ff] rounded-md hover:bg-[#c5dfff] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003c5b]"
              >
                Ver mais <FiArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          ))}
        </CardContent>
      )}

      {selectedProduct && (
        <Modal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </Card>
  );
}

export default RecommendationList;