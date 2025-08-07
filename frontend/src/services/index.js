// Product service
export { default as getProducts } from './product/product.service';

// Recommendation service
export { default as recommendationService } from './recommendation/recommendation.service';
export { countMatches, scoreProduct, filterAndSort } from './recommendation/recommendation.helpers';