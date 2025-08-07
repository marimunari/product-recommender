// system
import React from 'react';

// external libs
import { render, screen } from '@testing-library/react';

// hooks
import useProducts from '../../hooks/product/useProducts';

// services
import { getProducts } from '../../services';

jest.mock('../../services', () => ({
  getProducts: jest.fn(),
}));

const TestComponent = () => {
  const { preferences, features, products } = useProducts();

  return (
    <div>
      <pre>{JSON.stringify({ preferences, features, products })}</pre>
    </div>
  );
};

describe('useProducts', () => {
  const mockProducts = [
    {
      preferences: ['preference1', 'preference2', 'preference3'],
      features: ['feature1', 'feature2', 'feature3'],
    },
    {
      preferences: ['preference4', 'preference5', 'preference6'],
      features: ['feature4', 'feature5', 'feature6'],
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Deve retornar os estados vazios inicialmente', async () => {
    render(<TestComponent />);

    const preElement = await screen.findByText('{"preferences":[],"features":[],"products":[]}', { exact: false });
    expect(preElement).toBeInTheDocument();
  });

  test('Deve atualizar os estados após chamada bem-sucedida de getProducts', async () => {
    getProducts.mockResolvedValue(mockProducts);

    render(<TestComponent />);

    const preElement = await screen.findByText(/preference1/);

    expect(preElement).toBeInTheDocument();
    expect(screen.getByText(/feature1/)).toBeInTheDocument();
    expect(screen.getByText(/preference4/)).toBeInTheDocument();
    expect(screen.getByText(/feature4/)).toBeInTheDocument();
  });

  test('Deve lidar com erro na chamada de getProducts', async () => {
    getProducts.mockRejectedValue(new Error('Erro ao obter os produtos'));

    render(<TestComponent />);

    const preElement = await screen.findByText('{"preferences":[],"features":[],"products":[]}', { exact: false });

    expect(preElement).toBeInTheDocument();
  });
});