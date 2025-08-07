// system
import React from 'react';

// external libs
import { render, screen, fireEvent } from '@testing-library/react';

// internal components
import BackToTopButton from '../../components/BackToTopButton/BackToTopButton';

beforeAll(() => {
  window.scrollTo = jest.fn();
});

describe('BackToTopButton', () => {
  test('Não está visível inicialmente', () => {
    render(<BackToTopButton />);
    const button = screen.getByRole('button', { name: /voltar ao topo/i });
    expect(button).toHaveClass('opacity-0');
    expect(button).toHaveClass('pointer-events-none');
  });

  test('Fica visível quando o scroll é maior que 300', () => {
    render(<BackToTopButton />);
    fireEvent.scroll(window, { target: { pageYOffset: 301 } });
    return new Promise((resolve) => {
      setTimeout(() => {
        const button = screen.getByRole('button', { name: /voltar ao topo/i });
        expect(button).toHaveClass('opacity-100');
        expect(button).not.toHaveClass('pointer-events-none');
        resolve();
      }, 100);
    });
  });

  test('Chama window.scrollTo ao clicar', () => {
    render(<BackToTopButton />);
    fireEvent.scroll(window, { target: { pageYOffset: 400 } });
    return new Promise((resolve) => {
      setTimeout(() => {
        const button = screen.getByRole('button', { name: /voltar ao topo/i });
        fireEvent.click(button);
        expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
        resolve();
      }, 100);
    });
  });
});