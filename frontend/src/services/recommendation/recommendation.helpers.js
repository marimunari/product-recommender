/**
 * Method responsible for counting how many items from the source
 * exist in the target array.
 *
 * @param {string[]} source - Array to check items from.
 * @param {string[]} target - Array to compare against.
 * @returns {number} The count of matching items.
 */
export function countMatches(source, target) {
  return source.reduce((count, item) => (target.includes(item) ? count + 1 : count), 0);
}

/**
 * Method responsible for calculating the score of a product
 * based on selected preferences and features.
 *
 * @param {Object} product - The product to evaluate.
 * @param {string[]} selectedPreferences - Selected preferences by the user.
 * @param {string[]} selectedFeatures - Selected features by the user.
 * @returns {number} The calculated score (number of matches).
 */
export function scoreProduct(product, selectedPreferences, selectedFeatures) {
  const preferencesMatches = countMatches(product.preferences, selectedPreferences);
  const featuresMatches = countMatches(product.features, selectedFeatures);
  return preferencesMatches + featuresMatches;
}

/**
 * Method responsible for filtering products with a score greater than zero
 * and sorting them in descending order by their score.
 *
 * @param {Array<{product: Object, score: number}>} scoredProducts - Products with their scores.
 * @returns {Array<{product: Object, score: number}>} Filtered and sorted products.
 */
export function filterAndSort(scoredProducts) {
  return scoredProducts
    .filter(({ score }) => score > 0)
    .sort((productA, productB) => {
      if (productB.score === productA.score) {
        return productB.product.id - productA.product.id;
      }
      return productB.score - productA.score;
    });
}
