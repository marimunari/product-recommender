// system
import React from 'react';

// external libs
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// internal components
import RecommendationType from '../../components/Form/Fields/RecommendationType';

describe('RecommendationType', () => {
  test('Renderiza títulos e descrição corretamente', () => {
    render(<RecommendationType selectedRecommendationType="SingleProduct" onRecommendationTypeChange={() => {}} />);
    expect(screen.getByText(/Tipo de Recomendação:/i)).toBeInTheDocument();
    expect(screen.getByText(/Escolha como deseja receber suas recomendações/i)).toBeInTheDocument();
  });

  test('Renderiza as opções de radio com labels corretos', () => {
    render(<RecommendationType selectedRecommendationType="" onRecommendationTypeChange={() => {}} />);
    expect(screen.getByLabelText(/Produto Único/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Múltiplos Produtos/i)).toBeInTheDocument();
  });

  test('Marca a opção selecionada corretamente', () => {
    render(<RecommendationType selectedRecommendationType="MultipleProducts" onRecommendationTypeChange={() => {}} />);
    const radioMultiple = screen.getByLabelText(/Múltiplos Produtos/i);
    const radioSingle = screen.getByLabelText(/Produto Único/i);

    expect(radioMultiple).toBeChecked();
    expect(radioSingle).not.toBeChecked();
  });

  test('Chama onRecommendationTypeChange ao selecionar uma opção', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(<RecommendationType selectedRecommendationType="" onRecommendationTypeChange={handleChange} />);

    const radioSingle = screen.getByLabelText(/Produto Único/i);
    await user.click(radioSingle);
    expect(handleChange).toHaveBeenCalledWith('SingleProduct');

    const radioMultiple = screen.getByLabelText(/Múltiplos Produtos/i);
    await user.click(radioMultiple);
    expect(handleChange).toHaveBeenCalledWith('MultipleProducts');
  });
});
