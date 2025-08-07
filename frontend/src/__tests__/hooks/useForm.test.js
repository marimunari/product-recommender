// system
import React from 'react';

// external libs
import { render, act, screen } from '@testing-library/react';

// hooks
import useForm from '../../hooks/form/useForm';

const TestComponent = ({ initialState }) => {
  const { formData, handleChange, resetForm } = useForm(initialState);

  return (
    <div>
      <button onClick={() => handleChange('selectedPreferences', ['preference1'])}>
        Update Preferences
      </button>
      <button onClick={resetForm}>Reset Form</button>
      <pre>{JSON.stringify(formData)}</pre>
    </div>
  );
};

describe('useForm', () => {
  const initialState = {
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  };

  test('Deve retornar o estado inicial corretamente', () => {
    render(<TestComponent initialState={initialState} />);
    
    expect(screen.getByText('{"selectedPreferences":[],"selectedFeatures":[],"selectedRecommendationType":""}')).toBeInTheDocument();
  });

  test('Deve atualizar um campo corretamente com handleChange', () => {
    render(<TestComponent initialState={initialState} />);
    
    act(() => {
      screen.getByText('Update Preferences').click();
    });

    expect(screen.getByText('{"selectedPreferences":["preference1"],"selectedFeatures":[],"selectedRecommendationType":""}')).toBeInTheDocument();
  });

  test('Deve resetar o formulário para o estado inicial com resetForm', () => {
    render(<TestComponent initialState={initialState} />);
    
    act(() => {
      screen.getByText('Update Preferences').click();
    });

    expect(screen.getByText('{"selectedPreferences":["preference1"],"selectedFeatures":[],"selectedRecommendationType":""}')).toBeInTheDocument();

    act(() => {
      screen.getByText('Reset Form').click();
    });

    expect(screen.getByText('{"selectedPreferences":[],"selectedFeatures":[],"selectedRecommendationType":""}')).toBeInTheDocument();
  });
});
