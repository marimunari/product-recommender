// system
import React from 'react';

// internal components
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Checkbox } from '../../../components';

function Preferences({
  preferences,
  selectedPreferences = [],
  onPreferenceChange,
}) {
  /**
   * Method responsible for handling the change of a preference selection.
   *
   * @param {string} preference - The preference to toggle selection for.
   * @returns {void}
   */
  const handlePreferenceChange = (preference) => {
    const updatedPreferences = selectedPreferences.includes(preference)
      ? selectedPreferences.filter((selectedPreference) => selectedPreference !== preference)
      : [...selectedPreferences, preference];

    onPreferenceChange(updatedPreferences);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-[#003c5b] font-bold">
          Suas Preferências:
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm">
          Selecione suas preferências para receber recomendações personalizadas
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {preferences.map((preference) => (
            <li key={preference} className="mb-2">
              <Checkbox
                value={preference}
                checked={selectedPreferences.includes(preference)}
                onChange={() => handlePreferenceChange(preference)}
                className="text-green-500 cursor-pointer"
              >
                <span className="text-sm font-medium text-muted-foreground mt-1">
                  {preference}
                </span>
              </Checkbox>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default Preferences;