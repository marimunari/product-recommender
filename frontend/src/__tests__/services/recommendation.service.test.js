// services
import { recommendationService } from '../../services';

// mocks
import mockProducts from '../../mocks/mockProduts';

describe('recommendationService', () => {
  describe('SingleProduct', () => {
    test('Retorna recomendação correta com base nas preferências selecionadas', () => {
      const formData = {
        selectedPreferences: ['Integração com chatbots'],
        selectedFeatures: ['Chat ao vivo e mensagens automatizadas'],
        selectedRecommendationType: 'SingleProduct',
      };

      const recommendations = recommendationService.getRecommendations(
        formData,
        mockProducts
      );

      expect(recommendations).toHaveLength(1);
      expect(recommendations[0].name).toBe('RD Conversas');
    });

    test('Retorna apenas um produto mesmo com múltiplos matches', () => {
      const formData = {
        selectedPreferences: [
          'Integração fácil com ferramentas de e-mail',
          'Automação de marketing',
        ],
        selectedFeatures: [
          'Rastreamento de interações com clientes',
          'Rastreamento de comportamento do usuário',
        ],
        selectedRecommendationType: 'SingleProduct',
      };

      const recommendations = recommendationService.getRecommendations(
        formData,
        mockProducts
      );

      expect(recommendations).toHaveLength(1);
      expect(recommendations[0].name).toBe('RD Station Marketing');
    });

    test('Retorna o último match em caso de empate', () => {
      const formData = {
        selectedPreferences: ['Automação de marketing', 'Integração com chatbots'],
        selectedRecommendationType: 'SingleProduct',
        selectedFeatures: [],
      };

      const recommendations = recommendationService.getRecommendations(
        formData,
        mockProducts
      );

      expect(recommendations).toHaveLength(1);
      expect(recommendations[0].name).toBe('RD Conversas');
    });
  });

  describe('MultipleProducts', () => {
    test('Retorna recomendações corretas com base nas preferências e funcionalidades', () => {
      const formData = {
        selectedPreferences: [
          'Integração fácil com ferramentas de e-mail',
          'Personalização de funis de vendas',
          'Automação de marketing',
        ],
        selectedFeatures: [
          'Rastreamento de interações com clientes',
          'Rastreamento de comportamento do usuário',
        ],
        selectedRecommendationType: 'MultipleProducts',
      };

      const recommendations = recommendationService.getRecommendations(
        formData,
        mockProducts
      );

      expect(recommendations).toHaveLength(2);
      expect(recommendations.map((product) => product.name)).toEqual([
        'RD Station CRM',
        'RD Station Marketing',
      ]);
    });
  });

  describe('Fallback cases', () => {
    test('Retorna array vazio quando não há produtos compatíveis', () => {
      const formData = {
        selectedPreferences: ['Preferência inexistente'],
        selectedFeatures: ['Funcionalidade inexistente'],
        selectedRecommendationType: 'MultipleProducts',
      };

      const recommendations = recommendationService.getRecommendations(
        formData,
        mockProducts
      );

      expect(recommendations).toHaveLength(0);
    });

    test('Retorna array vazio para tipo de recomendação inválido', () => {
      const formData = {
        selectedPreferences: ['Automação de marketing'],
        selectedFeatures: ['Rastreamento de comportamento do usuário'],
        selectedRecommendationType: 'TipoInvalido',
      };

      const recommendations = recommendationService.getRecommendations(
        formData,
        mockProducts
      );

      expect(recommendations).toHaveLength(0);
    });

    test('Retorna array vazio se lista de produtos estiver vazia', () => {
      const formData = {
        selectedPreferences: ['Automação de marketing'],
        selectedFeatures: ['Rastreamento de comportamento do usuário'],
        selectedRecommendationType: 'SingleProduct',
      };

      const recommendations = recommendationService.getRecommendations(
        formData,
        []
      );

      expect(recommendations).toHaveLength(0);
    });
  });
});