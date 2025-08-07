// system
import React from 'react';

// external libs
import { render, screen, fireEvent } from '@testing-library/react';

// hooks
import useRecommendations from '../../hooks/recommendation/useRecommendations';

// services
import { recommendationService } from '../../services';

jest.mock('../../services', () => ({
  recommendationService: {
    getRecommendations: jest.fn(),
  },
}));

describe('useRecommendations', () => {
  it('Deve retornar recomendações corretamente', () => {
    const mockProducts = [
      { id: 1, name: 'Product A', category: 'Category 1' },
      { id: 2, name: 'Product B', category: 'Category 2' },
    ];

    const mockFormData = { category: 'Category 1' };

    recommendationService.getRecommendations.mockReturnValue([
      { id: 1, name: 'Product A', category: 'Category 1' },
    ]);

    const TestComponent = () => {
      const { recommendations, getRecommendations, setRecommendations } = useRecommendations(mockProducts);

      const handleSubmit = () => {
        const recommendations = getRecommendations(mockFormData);
        setRecommendations(recommendations);
      };

      return (
        <div>
          <button onClick={handleSubmit}>Get Recommendations</button>
          <div data-testid="recommendations">
            {recommendations.map((product) => (
              <p key={product.id}>{product.name}</p>
            ))}
          </div>
        </div>
      );
    };

    render(<TestComponent />);

    fireEvent.click(screen.getByText('Get Recommendations'));

    expect(screen.getByText('Product A')).toBeInTheDocument();
  });
});
