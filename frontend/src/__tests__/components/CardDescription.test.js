// system
import React from 'react';

// external libs
import { render, screen } from '@testing-library/react';

// internal components
import CardDescription from '../../components/Card/CardDescription';

describe('CardDescription', () => {
  test('Renderiza o conteúdo corretamente', () => {
    render(<CardDescription>Descrição do card</CardDescription>);
    expect(screen.getByText('Descrição do card')).toBeInTheDocument();
  });

  test('Aplica o id quando fornecido', () => {
    render(<CardDescription id="desc1">Descrição</CardDescription>);
    expect(screen.getByText('Descrição')).toHaveAttribute('id', 'desc1');
  });

  test('Aplica classes CSS adicionais quando passadas', () => {
    render(<CardDescription className="classe-teste">Teste</CardDescription>);
    
    const pElement = screen.getByText('Teste');
    
    expect(pElement).toHaveClass('classe-teste');
  });
});
