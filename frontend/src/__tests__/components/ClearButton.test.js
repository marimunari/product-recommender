import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ClearButton from '../../components/Form/ClearButton/ClearButton';

describe('ClearButton', () => {
  test('Renderiza o texto passado como children', () => {
    render(<ClearButton>Limpar</ClearButton>);
    expect(screen.getByText('Limpar')).toBeInTheDocument();
  });

  test('Chama a função onClick ao ser clicado', () => {
    const onClickMock = jest.fn();
    render(<ClearButton onClick={onClickMock}>Limpar</ClearButton>);
    const button = screen.getByRole('button', { name: /limpar/i });
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('Aplica classes adicionais passadas via className', () => {
    render(<ClearButton className="minha-classe">Botão</ClearButton>);
    const button = screen.getByRole('button', { name: /botão/i });
    expect(button).toHaveClass('minha-classe');
  });

  test('Tem o type="button" por padrão', () => {
    render(<ClearButton>Teste</ClearButton>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');
  });
});
