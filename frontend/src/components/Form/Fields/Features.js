// system
import React from 'react';

// internal components
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Checkbox } from '../../../components';

function Features({ features, selectedFeatures = [], onFeatureChange }) {
  /**
   * Method responsible for handling the change of a feature selection.
   *
   * @param {string} feature - The feature to toggle selection for.
   * @returns {void}
   */
  const handleFeatureChange = (feature) => {
    const updatedFeatures = selectedFeatures.includes(feature)
      ? selectedFeatures.filter((selectedFeature) => selectedFeature !== feature)
      : [...selectedFeatures, feature];

    onFeatureChange(updatedFeatures);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-[#003c5b] font-bold">
          Funcionalidades Desejadas:
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm">
          Escolha as funcionalidades mais importantes para você
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {features.map((feature) => (
            <li key={feature} className="mb-2">
              <Checkbox
                value={feature}
                checked={selectedFeatures.includes(feature)}
                onChange={() => handleFeatureChange(feature)}
                className="text-green-500 cursor-pointer"
              >
                <span className="text-sm font-medium text-muted-foreground mt-1">
                  {feature}
                </span>
              </Checkbox>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default Features;
