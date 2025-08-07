// system
import React from 'react';

// external libs
import { render, screen, fireEvent } from '@testing-library/react';

// internal components
import RecommendationList from '../../components/RecommendationList/RecommendationList';

// mocks
import mockProducts from '../../mocks/mockProduts';

jest.mock('axios');

describe('RecommendationList', () => {
  test('Exibe mensagem quando não há recomendações', () => {
    render(<RecommendationList recommendations={[]} />);
    expect(screen.getByText(/Nenhuma recomendação encontrada./i)).toBeInTheDocument();
  });

  test('Renderiza produtos e suas preferências e funcionalidades', () => {
    render(<RecommendationList recommendations={mockProducts.slice(0, 1)} />);
    
    const product = mockProducts[0];
    
    expect(screen.getByText(product.name)).toBeInTheDocument();

    product.preferences.forEach(pref => {
      expect(screen.getByText(pref)).toBeInTheDocument();
    });

    product.features.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  test('Abre modal ao clicar em "Ver mais" e fecha modal', () => {
    render(<RecommendationList recommendations={mockProducts.slice(0, 1)} />);
    
    const product = mockProducts[0];
    const button = screen.getByRole('button', { name: /Ver mais/i });
    fireEvent.click(button);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(`#${product.id} ${product.name}`)).toBeInTheDocument();

    const closeButton = screen.getByLabelText(/Fechar modal/i);
    fireEvent.click(closeButton);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
