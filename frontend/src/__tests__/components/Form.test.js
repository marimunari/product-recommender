// system
import React from 'react';

// external libs
import { render, screen, fireEvent } from '@testing-library/react';

// internal components
import Form from '../../components/Form/Form';

import { useForm, useProducts, useRecommendations } from '../../hooks';

jest.mock('../../hooks', () => ({
  useForm: jest.fn(),
  useProducts: jest.fn(),
  useRecommendations: jest.fn(),
}));

describe('Form', () => {
  const mockPreferences = ['Pref 1', 'Pref 2'];
  const mockFeatures = ['Feat 1', 'Feat 2'];
  const mockProducts = [{ id: 1, name: 'Product 1' }];

  let formData;
  let handleChange;
  let resetForm;
  let getRecommendations;
  let onUpdateRecommendations;

  beforeEach(() => {
    formData = {
      selectedPreferences: [],
      selectedFeatures: [],
      selectedRecommendationType: '',
    };

    handleChange = jest.fn((field, value) => {
      formData[field] = value;
    });

    resetForm = jest.fn(() => {
      formData = {
        selectedPreferences: [],
        selectedFeatures: [],
        selectedRecommendationType: '',
      };
    });

    getRecommendations = jest.fn(() => ['recomendação simulada']);

    onUpdateRecommendations = jest.fn();

    useForm.mockReturnValue({
      formData,
      handleChange,
      resetForm,
    });

    useProducts.mockReturnValue({
      preferences: mockPreferences,
      features: mockFeatures,
      products: mockProducts,
    });

    useRecommendations.mockReturnValue({
      getRecommendations,
    });
  });

  test('Renderiza corretamente os componentes filhos e botões', () => {
    render(<Form onUpdateRecommendations={onUpdateRecommendations} />);

    mockPreferences.forEach((pref) => {
      expect(screen.getByText(pref)).toBeInTheDocument();
    });

    mockFeatures.forEach((feat) => {
      expect(screen.getByText(feat)).toBeInTheDocument();
    });

    expect(screen.getByRole('button', { name: /obter recomendação/i })).toBeDisabled();
    expect(screen.getByRole('button', { name: /limpar/i })).toBeEnabled();
  });

  test('Habilita botão submit quando formulário é válido', () => {
    formData.selectedPreferences = ['Pref 1'];
    formData.selectedRecommendationType = 'SingleProduct';

    render(<Form onUpdateRecommendations={onUpdateRecommendations} />);

    const submitButton = screen.getByRole('button', { name: /obter recomendação/i });
    expect(submitButton).toBeEnabled();
  });

  test('Verifica se o botão de submit está desabilitado quando o formulário é inválido', () => {
    formData.selectedPreferences = [];
    formData.selectedRecommendationType = '';

    render(<Form onUpdateRecommendations={onUpdateRecommendations} />);

    const submitButton = screen.getByRole('button', { name: /obter recomendação/i });
    expect(submitButton).toBeDisabled();
  });

  test('Chama getRecommendations e onUpdateRecommendations ao submeter formulário válido', () => {
    formData.selectedPreferences = ['Pref 1'];
    formData.selectedRecommendationType = 'SingleProduct';

    render(<Form onUpdateRecommendations={onUpdateRecommendations} />);

    fireEvent.submit(screen.getByTestId('form'));

    expect(getRecommendations).toHaveBeenCalledWith(formData);
    expect(onUpdateRecommendations).toHaveBeenCalledWith(['recomendação simulada']);
  });

  test('Chama resetForm e limpa recomendações ao clicar no botão limpar', () => {
    render(<Form onUpdateRecommendations={onUpdateRecommendations} />);

    const clearButton = screen.getByRole('button', { name: /limpar/i });
    fireEvent.click(clearButton);

    expect(resetForm).toHaveBeenCalled();
    expect(onUpdateRecommendations).toHaveBeenCalledWith([]);
  });

  test('Exibe mensagem de validação quando formulário é inválido', () => {
    render(<Form onUpdateRecommendations={onUpdateRecommendations} />);

    const alert = screen.getByRole('alert');
    expect(alert).toHaveTextContent(
      'Selecione pelo menos uma preferência ou funcionalidade e um tipo de recomendação'
    );
  });

  test('Não exibe mensagem de validação quando formulário é válido', () => {
    formData.selectedPreferences = ['Pref 1'];
    formData.selectedRecommendationType = 'SingleProduct';

    render(<Form onUpdateRecommendations={onUpdateRecommendations} />);

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});
