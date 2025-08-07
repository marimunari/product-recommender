// system
import React from 'react';

// external libs
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// internal components
import Features from '../../components/Form/Fields/Features';

describe('Features', () => {
  const featuresList = ['Feature 1', 'Feature 2', 'Feature 3'];

  test('Renderiza título e descrição corretamente', () => {
    render(<Features features={featuresList} selectedFeatures={[]} onFeatureChange={() => {}} />);
    expect(screen.getByText(/Funcionalidades Desejadas:/i)).toBeInTheDocument();
    expect(screen.getByText(/Escolha as funcionalidades mais importantes para você/i)).toBeInTheDocument();
  });

  test('Renderiza todas as funcionalidades como checkboxes', () => {
    render(<Features features={featuresList} selectedFeatures={[]} onFeatureChange={() => {}} />);
    featuresList.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument();
      const checkbox = screen.getByRole('checkbox', { name: feature });
      expect(checkbox).toBeInTheDocument();
      expect(checkbox).not.toBeChecked();
    });
  });

  test('Marca as funcionalidades selecionadas corretamente', () => {
    render(<Features features={featuresList} selectedFeatures={['Feature 2']} onFeatureChange={() => {}} />);
    const checkedCheckbox = screen.getByRole('checkbox', { name: 'Feature 2' });
    expect(checkedCheckbox).toBeChecked();

    const uncheckedCheckbox = screen.getByRole('checkbox', { name: 'Feature 1' });
    expect(uncheckedCheckbox).not.toBeChecked();
  });

  test('Chama onFeatureChange com a lista atualizada ao marcar/desmarcar uma feature', async () => {
    const user = userEvent.setup();
    const handleFeatureChange = jest.fn();

    render(<Features features={featuresList} selectedFeatures={['Feature 1']} onFeatureChange={handleFeatureChange} />);

    const feature1Checkbox = screen.getByRole('checkbox', { name: 'Feature 1' });
    await user.click(feature1Checkbox);
    expect(handleFeatureChange).toHaveBeenCalledWith([]);

    const feature2Checkbox = screen.getByRole('checkbox', { name: 'Feature 2' });
    await user.click(feature2Checkbox);
    expect(handleFeatureChange).toHaveBeenCalledWith(['Feature 1', 'Feature 2']);
  });
});
