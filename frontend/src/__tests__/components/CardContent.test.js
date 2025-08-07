// system
import React from 'react';

// external libs
import { render, screen } from '@testing-library/react';

// internal components
import CardContent from '../../components/Card/CardContent';

describe('CardContent', () => {
  test('Renderiza os filhos corretamente', () => {
    render(
      <CardContent>
        <p>Conteúdo do CardContent</p>
      </CardContent>
    );
    expect(screen.getByText('Conteúdo do CardContent')).toBeInTheDocument();
  });

  test('Aplica aria-label quando fornecido', () => {
    render(
      <CardContent ariaLabel="Área do conteúdo">
        <p>Conteúdo</p>
      </CardContent>
    );
    const section = screen.getByLabelText('Área do conteúdo');
    expect(section).toBeInTheDocument();
  });

  test('Aplica classes CSS passadas via className', () => {
    render(
      <CardContent className="minha-classe" ariaLabel="conteudo teste">
        <p>Teste</p>
      </CardContent>
    );

    const section = screen.getByRole('region', { name: /conteudo teste/i });
    expect(section).toHaveClass('minha-classe');
  });
});
