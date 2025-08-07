// system
import React, { useEffect } from 'react';

// hooks
import { useForm, useProducts, useRecommendations } from '../../hooks';

// internal components
import { ClearButton, Features, Preferences, RecommendationType, SubmitButton } from '../../components';

// external icons
import { LuSparkles } from "react-icons/lu";

function Form({ onUpdateRecommendations }) {
  // Load available preferences, features and products
  const { preferences, features, products } = useProducts();

  // Manage form state using custom hook
  const { formData, handleChange, resetForm } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  // Get recommendation logic
  const { getRecommendations } = useRecommendations(products);

  /**
   * Effect responsible for clearing recommendations when all user inputs are empty.
   */
  useEffect(() => {
    const noUserInput =
      formData.selectedPreferences.length === 0 &&
      formData.selectedFeatures.length === 0;

    if (noUserInput) {
      onUpdateRecommendations([]);
    }
  }, [formData.selectedPreferences, formData.selectedFeatures, onUpdateRecommendations]);

  /**
   * Boolean indicating whether the form is valid.
   * Requires at least one selected preference or feature, and a recommendation type.
   */
  const isFormValid =
  (formData.selectedPreferences.length > 0 || formData.selectedFeatures.length > 0) &&
  formData.selectedRecommendationType !== '';


  /**
   * Method responsible for handling form submission and triggering recommendations update.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - Form event.
   * @returns {void}
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isFormValid) return;

    const dataRecommendations = getRecommendations(formData);
    onUpdateRecommendations(dataRecommendations);
  };

  /**
   * Method responsible for clearing form state and recommendations.
   *
   * @returns {void}
   */
  const handleClear = () => {
    resetForm();
    onUpdateRecommendations([]);
  };

  return (
    <form
      className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8"
      data-testid="form"
      onSubmit={handleSubmit}
      aria-describedby="form-validation-message"
      noValidate
    >
      <Preferences
        preferences={preferences}
        selectedPreferences={formData.selectedPreferences}
        onPreferenceChange={(selected) =>
          handleChange('selectedPreferences', selected)
        }
      />

      <Features
        features={features}
        selectedFeatures={formData.selectedFeatures}
        onFeatureChange={(selected) =>
          handleChange('selectedFeatures', selected)
        }
      />

      <RecommendationType
        selectedRecommendationType={formData.selectedRecommendationType}
        onRecommendationTypeChange={(selected) =>
          handleChange('selectedRecommendationType', selected)
        }
      />

      <div className="flex flex-col items-center justify-center space-y-2 col-span-full">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 col-span-full w-full px-4 max-w-md mx-auto">
          <SubmitButton disabled={!isFormValid} className="min-w-[260px] max-w-[320px]">
            <LuSparkles aria-hidden="true" className="mr-2" />
            Obter recomendação
          </SubmitButton>

          <ClearButton onClick={handleClear} className="flex-1 bg-gray-200 text-gray-700 hover:bg-gray-300">
            Limpar
          </ClearButton>
        </div>


        {!isFormValid && (
          <p
            id="form-validation-message"
            role="alert"
            className="text-sm text-muted-foreground text-center"
          >
            Selecione pelo menos uma preferência ou funcionalidade e um tipo de recomendação
          </p>
        )}
      </div>
    </form>
  );
}

export default Form;