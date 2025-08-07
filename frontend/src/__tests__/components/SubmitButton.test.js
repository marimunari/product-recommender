// system
import React from 'react';

// external libs
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// internal components
import SubmitButton from '../../components/Form/SubmitButton/SubmitButton';

describe('SubmitButton', () => {
  test('Renderiza o texto passado como children', () => {
    render(<SubmitButton>Enviar</SubmitButton>);
    expect(screen.getByRole('button', { name: /enviar/i })).toBeInTheDocument();
  });

  test('Tem o atributo type="submit"', () => {
    render(<SubmitButton>Enviar</SubmitButton>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  test('Desabilita o botão quando a prop disabled é true', () => {
    render(<SubmitButton disabled>Enviar</SubmitButton>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-disabled', 'true');
    expect(button).toHaveClass('opacity-50 cursor-not-allowed');
  });

  test('Ativa o hover e não aplica classes de disabled quando não está desabilitado', () => {
    render(<SubmitButton>Enviar</SubmitButton>);
    const button = screen.getByRole('button');
    expect(button).not.toBeDisabled();
    expect(button).toHaveClass('hover:bg-[#00587a]');
  });

  test('Aplica classes adicionais passadas via className', () => {
    render(<SubmitButton className="classe-teste">Enviar</SubmitButton>);
    const button = screen.getByRole('button', { name: /enviar/i });
    expect(button).toHaveClass('classe-teste');
  });

  test('Permite clique quando não está desabilitado', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(
      <SubmitButton onClick={onClick}>Enviar</SubmitButton>
    );
    const button = screen.getByRole('button');
    await user.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
