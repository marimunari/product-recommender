// system
import React from 'react';

// external libs
import { render, screen, fireEvent } from '@testing-library/react';

// internal components
import Checkbox from '../../components/shared/Checkbox/Checkbox';

describe('Checkbox', () => {
  test('Renderiza o label e checkbox', () => {
    render(<Checkbox id="test-checkbox">Opção de teste</Checkbox>);
    
    const checkbox = screen.getByRole('checkbox');
    const label = screen.getByText('Opção de teste');

    expect(checkbox).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(checkbox).toHaveAttribute('id', 'test-checkbox');
  });

  test('Chama onChange ao clicar', () => {
    const handleChange = jest.fn();
    render(
      <Checkbox id="test-checkbox" onChange={handleChange}>
        Opção
      </Checkbox>
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('Pode receber props type diferentes', () => {
    render(
      <Checkbox id="radio-checkbox" type="radio">
        Rádio
      </Checkbox>
    );

    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
  });
});