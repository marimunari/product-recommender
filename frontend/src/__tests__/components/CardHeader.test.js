// system
import React from 'react';

// external libs
import { render, screen } from '@testing-library/react';

// internal components
import CardHeader from '../../components/Card/CardHeader';

describe('CardHeader', () => {
  test('Renderiza o conteúdo corretamente', () => {
    render(<CardHeader>Conteúdo do cabeçalho</CardHeader>);
    expect(screen.getByText('Conteúdo do cabeçalho')).toBeInTheDocument();
  });

  test('Aplica classes CSS adicionais quando passadas', () => {
    render(<CardHeader className="classe-teste">Cabeçalho</CardHeader>);
    const headerElement = screen.getByText('Cabeçalho');

    expect(headerElement).toHaveClass('mb-2');
    expect(headerElement).toHaveClass('classe-teste');
  });
});
