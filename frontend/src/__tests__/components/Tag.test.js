// system
import React from 'react';

// external libs
import { render, screen } from '@testing-library/react';

// internal components
import Tag from '../../components/shared/Tag/Tag';

describe('Tag', () => {
  test('Renderiza o texto corretamente', () => {
    render(<Tag>Teste</Tag>);
    expect(screen.getByText('Teste')).toBeInTheDocument();
  });

  test('Aplica classes do variant primary por padrão', () => {
    render(<Tag>Primário</Tag>);
    const tag = screen.getByText('Primário');
    expect(tag).toHaveClass('bg-[#e5f3ff]');
    expect(tag).toHaveClass('text-[#003c5b]');
  });

  test('Aplica classes do variant success', () => {
    render(<Tag variant="success">Sucesso</Tag>);
    const tag = screen.getByText('Sucesso');
    expect(tag).toHaveClass('bg-[#f0f9f4]');
    expect(tag).toHaveClass('text-green-700');
  });

  test('Usa variant primary caso o variant seja inválido', () => {
    render(<Tag variant="invalido">Fallback</Tag>);
    const tag = screen.getByText('Fallback');
    expect(tag).toHaveClass('bg-[#e5f3ff]');
    expect(tag).toHaveClass('text-[#003c5b]');
  });
});
