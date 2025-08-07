// system
import React from 'react';

// external libs
import { render, screen, fireEvent } from '@testing-library/react';

// internal components
import Modal from '../../components/Modal/Modal';

// mocks
import mockProducts from '../../mocks/mockProduts';

describe('Modal', () => {
  const onClose = jest.fn();
  const product = mockProducts[0];

  const setup = () => render(<Modal product={product} onClose={onClose} />);

  beforeEach(() => {
    onClose.mockClear();
  });

  test('Renderiza título com id e nome do produto', () => {
    setup();
    expect(screen.getByText(`#${product.id} ${product.name}`)).toBeInTheDocument();
  });

  test('Renderiza categoria do produto', () => {
    setup();
    expect(screen.getByText('Categoria:')).toBeInTheDocument();
    expect(screen.getByText(product.category)).toBeInTheDocument();
  });

  test('Renderiza todas as preferências como tags', () => {
    setup();
    product.preferences.forEach(pref => {
      expect(screen.getByText(pref)).toBeInTheDocument();
    });
  });

  test('Renderiza todas as funcionalidades como tags', () => {
    setup();
    product.features.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  test('Chama onClose ao clicar no overlay', () => {
    setup();
    const overlay = screen.getByRole('dialog');
    fireEvent.click(overlay);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('Chama onClose ao clicar no botão fechar', () => {
    setup();
    const closeButton = screen.getByLabelText('Fechar modal');
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
