// axios
import axios from 'axios';

// Base URL for the backend API
const baseURL = 'http://localhost:3001';

/**
 * Method responsible for fetching products from the backend API.
 *
 * @async
 * @returns {Promise<Object[]>} Promise resolving to an array of product objects.
 * @throws Will throw an error if the API request fails.
 */
const getProducts = async () => {
  try {
    const response = await axios.get(`${baseURL}/products`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter os produtos:', error);
    throw error;
  }
};

export default getProducts;
