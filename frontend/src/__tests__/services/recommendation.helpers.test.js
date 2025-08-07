// helpers
import { countMatches, scoreProduct, filterAndSort } from '../../services';

// mocks
import mockProducts from '../../mocks/mockProduts';

describe('countMatches', () => {
  test('Retorna o número correto de correspondências', () => {
    const source = ['Integração com chatbots', 'Histórico unificado de interações'];
    const target = ['Integração com chatbots', 'Respostas automáticas e personalizadas'];
    expect(countMatches(source, target)).toBe(1);
  });

  test('Retorna 0 quando não há correspondência', () => {
    expect(countMatches(['Funcionalidade X'], ['Funcionalidade Y'])).toBe(0);
  });
});

describe('scoreProduct', () => {
  test('Retorna soma correta de matches para produto real', () => {
    const product = mockProducts.find(p => p.name === 'RD Conversas');
    const selectedPreferences = ['Integração com chatbots', 'Respostas automáticas e personalizadas'];
    const selectedFeatures = ['Chat ao vivo e mensagens automatizadas'];

    const score = scoreProduct(product, selectedPreferences, selectedFeatures);
    expect(score).toBe(3);
  });

  test('Retorna 0 se nenhum match', () => {
    const product = mockProducts[0];
    expect(scoreProduct(product, ['Preferência inexistente'], ['Funcionalidade inexistente'])).toBe(0);
  });
});

describe('filterAndSort', () => {
  test('Filtra produtos com score 0 e ordena desc', () => {
    const scoredProducts = [
      { product: mockProducts[0], score: 2 },
      { product: mockProducts[1], score: 0 },
      { product: mockProducts[2], score: 3 },
    ];

    const result = filterAndSort(scoredProducts);

    expect(result).toHaveLength(2);
    expect(result[0].product.name).toBe('RD Conversas');
    expect(result[1].product.name).toBe('RD Station CRM');
  });

  test('Retorna array vazio se nenhum produto tiver score positivo', () => {
    const scored = [
      { product: mockProducts[0], score: 0 },
      { product: mockProducts[1], score: 0 },
    ];

    expect(filterAndSort(scored)).toEqual([]);
  });
});
