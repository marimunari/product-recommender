// system
import React from 'react';

// internal components
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Checkbox } from '../../../components';

function RecommendationType({ selectedRecommendationType, onRecommendationTypeChange }) {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-[#003c5b] font-bold">
          Tipo de Recomendação:
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm">
          Escolha como deseja receber suas recomendações
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <label
            htmlFor="SingleProduct"
            className="flex items-center cursor-pointer gap-2 text-muted-foreground text-sm font-medium"
          >
            <Checkbox
              id="SingleProduct"
              type="radio"
              name="recommendationType"
              value="SingleProduct"
              checked={selectedRecommendationType === 'SingleProduct'}
              onChange={() => onRecommendationTypeChange('SingleProduct')}
              className="mr-1"
            />
            Produto Único
          </label>
          <label
            htmlFor="MultipleProducts"
            className="flex items-center cursor-pointer gap-2 text-muted-foreground text-sm font-medium"
          >
            <Checkbox
              id="MultipleProducts"
              type="radio"
              name="recommendationType"
              value="MultipleProducts"
              checked={selectedRecommendationType === 'MultipleProducts'}
              onChange={() => onRecommendationTypeChange('MultipleProducts')}
              className="mr-1"
            />
            Múltiplos Produtos
          </label>
        </div>
      </CardContent>
    </Card>
  );
}

export default RecommendationType;
