// system
import { useState, useCallback } from 'react';

const useForm = (initialState) => {
  // State representing the current form data.
  const [formData, setFormData] = useState(initialState);

   /**
   * Method responsible for updating a specific field in the form state.
   *
   * @param {string} field - The name of the field to update.
   * @param {any} value - The new value for the field.
   * @returns {void}
   */
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  /**
   * Method responsible for resetting the form state to its initial values.
   *
   * @returns {void}
   */
  const resetForm = useCallback(() => {
    setFormData(initialState);
  }, [initialState]);

  return { formData, handleChange, resetForm };
};

export default useForm;
