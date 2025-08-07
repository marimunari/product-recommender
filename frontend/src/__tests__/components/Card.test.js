// system
import React from 'react';

// external libs
import { render, screen } from '@testing-library/react';

// internal components
import Card from '../../components/Card/Card';

describe('Card', () => {
  test('Renderiza os filhos corretamente', () => {
    render(
      <Card>
        <p>Conteúdo do Card</p>
      </Card>
    );
    expect(screen.getByText('Conteúdo do Card')).toBeInTheDocument();
  });

  test('Aplica a classe customizada passada por className', () => {
    render(<Card className="minha-classe" />);
    const card = screen.getByRole('region');
    expect(card).toHaveClass('minha-classe');
  });

  test('Usa role e aria-label padrões', () => {
    render(<Card>Teste</Card>);
    const card = screen.getByRole('region', { name: /card de conteúdo/i });
    expect(card).toBeInTheDocument();
  });

  test('Aceita role e aria-label customizados via props', () => {
    render(
      <Card role="banner" aria-label="Card customizado">
        Teste
      </Card>
    );
    const card = screen.getByRole('banner', { name: /card customizado/i });
    expect(card).toBeInTheDocument();
  });
});
