// helpers
import { scoreProduct, filterAndSort } from '..';

/**
 * Method responsible for generating product recommendations
 * based on user selections and products list.
 *
 * @param {Object} formData - The form data containing user selections.
 * @param {string[]} formData.selectedPreferences - Selected preferences.
 * @param {string[]} formData.selectedFeatures - Selected features.
 * @param {string} formData.selectedRecommendationType - Recommendation type ('SingleProduct' or 'MultipleProducts').
 * @param {Object[]} products - List of available products.
 * @returns {Object[]} List of recommended products.
 */
function getRecommendations(formData = {}, products = []) {
  const {
    selectedPreferences = [],
    selectedFeatures = [],
    selectedRecommendationType = '',
  } = formData;

  if (!products.length) return [];

  const scored = products.map(product => ({
    product,
    score: scoreProduct(product, selectedPreferences, selectedFeatures),
  }));

  const filteredSorted = filterAndSort(scored).filter(({ score }) => score > 0);

  if (filteredSorted.length === 0) return [];

  if (selectedRecommendationType === 'SingleProduct') {
    return [filteredSorted[0].product];
  }

  if (selectedRecommendationType === 'MultipleProducts') {
    return filteredSorted.map(({ product }) => product);
  }

  return [];
}

const recommendationService = {
  getRecommendations,
};

export default recommendationService;
