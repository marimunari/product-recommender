// system
import React from 'react';

// external libs
import { render, screen } from '@testing-library/react';

// internal components
import CardTitle from '../../components/Card/CardTitle';

describe('CardTitle', () => {
  test('Renderiza o conteúdo dentro da tag padrão h3', () => {
    render(<CardTitle>Meu título</CardTitle>);
    const heading = screen.getByText('Meu título');
    expect(heading.tagName.toLowerCase()).toBe('h3');
    expect(heading).toBeInTheDocument();
  });

  test('Renderiza o conteúdo dentro da tag especificada no prop "as"', () => {
    render(<CardTitle as="h1">Título principal</CardTitle>);
    const heading = screen.getByText('Título principal');
    expect(heading.tagName.toLowerCase()).toBe('h1');
  });

  test('Aplica classes CSS adicionais quando passadas', () => {
    render(<CardTitle className="classe-teste">Título</CardTitle>);
    const titleElement = screen.getByText('Título');

    expect(titleElement).toHaveClass('text-lg');
    expect(titleElement).toHaveClass('font-semibold');
    expect(titleElement).toHaveClass('classe-teste');
  });
});
