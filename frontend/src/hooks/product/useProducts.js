// system
import { useEffect, useState } from 'react';

// services
import { getProducts } from '../../services';

const useProducts = () => {
  // State to hold all preferences extracted from products.
  const [preferences, setPreferences] = useState([]);
  // State to hold all features extracted from products.
  const [features, setFeatures] = useState([]);
  // State to hold the list of products fetched from the API/service.
  const [products, setProducts] = useState([]);

  /**
   * Effect hook to fetch products once on component mount.
   * It extracts a randomized subset of preferences and features from the products.
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts();
        const allPreferences = [];
        const allFeatures = [];

        setProducts(products);

        products.forEach((product) => {
          const productPreferences = product.preferences
            .sort(() => Math.random() - 0.5)
            .slice(0, 2);
          allPreferences.push(...productPreferences);

          const productFeatures = product.features
            .sort(() => Math.random() - 0.5)
            .slice(0, 2);
          allFeatures.push(...productFeatures);
        });

        setPreferences(allPreferences);
        setFeatures(allFeatures);
      } catch (error) {
        console.error('Erro ao obter os produtos:', error);
      }
    };

    fetchData();
  }, []);

  return { preferences, features, products };
};

export default useProducts;
