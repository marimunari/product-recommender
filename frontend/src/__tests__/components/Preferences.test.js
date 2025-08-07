// system
import React from 'react';

// external libs
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// internal components
import Preferences from '../../components/Form/Fields/Preferences';

describe('Preferences', () => {
  const preferencesList = ['Preferência A', 'Preferência B', 'Preferência C'];

  test('Renderiza título e descrição corretamente', () => {
    render(<Preferences preferences={preferencesList} selectedPreferences={[]} onPreferenceChange={() => {}} />);
    expect(screen.getByText(/Suas Preferências:/i)).toBeInTheDocument();
    expect(screen.getByText(/Selecione suas preferências para receber recomendações personalizadas/i)).toBeInTheDocument();
  });

  test('Renderiza todas as preferências como checkboxes', () => {
    render(<Preferences preferences={preferencesList} selectedPreferences={[]} onPreferenceChange={() => {}} />);
    preferencesList.forEach(pref => {
      expect(screen.getByText(pref)).toBeInTheDocument();
      const checkbox = screen.getByRole('checkbox', { name: pref });
      expect(checkbox).toBeInTheDocument();
      expect(checkbox).not.toBeChecked();
    });
  });

  test('Marca as preferências selecionadas corretamente', () => {
    render(<Preferences preferences={preferencesList} selectedPreferences={['Preferência B']} onPreferenceChange={() => {}} />);
    const checkedCheckbox = screen.getByRole('checkbox', { name: 'Preferência B' });
    expect(checkedCheckbox).toBeChecked();

    const uncheckedCheckbox = screen.getByRole('checkbox', { name: 'Preferência A' });
    expect(uncheckedCheckbox).not.toBeChecked();
  });

  test('Chama onPreferenceChange com a lista atualizada ao desmarcar uma preferência', async () => {
    const user = userEvent.setup();
    const handlePreferenceChange = jest.fn();

    render(<Preferences preferences={preferencesList} selectedPreferences={['Preferência A']} onPreferenceChange={handlePreferenceChange} />);

    const checkbox = screen.getByRole('checkbox', { name: 'Preferência A' });
    await user.click(checkbox);
    expect(handlePreferenceChange).toHaveBeenCalledWith([]);
  });

  test('Chama onPreferenceChange com a lista atualizada ao marcar uma preferência', async () => {
    const user = userEvent.setup();
    const handlePreferenceChange = jest.fn();

    render(<Preferences preferences={preferencesList} selectedPreferences={[]} onPreferenceChange={handlePreferenceChange} />);

    const checkbox = screen.getByRole('checkbox', { name: 'Preferência B' });
    await user.click(checkbox);
    expect(handlePreferenceChange).toHaveBeenCalledWith(['Preferência B']);
  });
});
