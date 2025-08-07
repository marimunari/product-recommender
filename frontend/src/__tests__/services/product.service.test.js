// axios
import axios from 'axios';

// services
import getProducts from '../../services/product/product.service';

// mocks
import mockProducts from '../../mocks/mockProduts';

jest.mock('axios');

describe('productService', () => {
  test('Retorna os produtos corretamente quando a requisição é bem-sucedida', async () => {
    axios.get.mockResolvedValueOnce({ data: mockProducts });

    const products = await getProducts();

    expect(products).toHaveLength(4);
    expect(products[0].name).toBe('RD Station CRM');
    expect(products[3].category).toBe('Uso de Inteligência Artificial');
    expect(axios.get).toHaveBeenCalledWith('http://localhost:3001/products');
  });

  test('Lança erro quando a requisição falha', async () => {
    const mockError = new Error('Erro de rede');
    axios.get.mockRejectedValueOnce(mockError);

    await expect(getProducts()).rejects.toThrow('Erro de rede');
    expect(axios.get).toHaveBeenCalledWith('http://localhost:3001/products');
  });
});