// system
import { useState } from 'react';

// services
import { recommendationService } from '../../services';

function useRecommendations(products) {
  // State to hold the current list of recommended products.
  const [recommendations, setRecommendations] = useState([]);

  /**
   * Method responsible for generating product recommendations
   * based on user form data and available products.
   *
   * @param {Object} formData - User selections from the form.
   * @returns {Object[]} List of recommended products.
   */
  const getRecommendations = (formData) => {
    return recommendationService.getRecommendations(formData, products);
  };

  return { recommendations, getRecommendations, setRecommendations };
}

export default useRecommendations;
