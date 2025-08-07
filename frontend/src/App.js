// system
import React, { useState, useCallback } from 'react';

// internal components
import { BackToTopButton, Footer, Form, Header, RecommendationList } from './components';

// images
import RDLogo from './assets/images/logo_rd.png';

function App() {
  const [recommendations, setRecommendations] = useState([]);

  /**
   * Method responsible for updating the product recommendations state.
   * @param {Array} newRecommendations - New list of recommendations.
   * @returns {void}
   */
  const handleRecommendationsUpdate = useCallback((newRecommendations) => {
    setRecommendations(newRecommendations);
  }, []);

  return (
    <>
      <Header
        logoSrc={RDLogo}
        logoAlt="RD Station Logo"
        showTitle
        title="Recomendador de Produtos RD Station"
        description="Encontre os produtos ideais da RD Station com base nas suas preferências e necessidades."
      />

      <main className="bg-gradient-bg min-h-screen py-12 px-4 flex flex-col gap-16">
        <section className="container max-w-6xl mx-auto">
          <div className="bg-background shadow-md rounded-lg p-6">
            <Form onUpdateRecommendations={handleRecommendationsUpdate} />
          </div>
        </section>

        <section className="container max-w-6xl mx-auto" aria-label="Lista de recomendações de produtos">
          <div className="bg-background shadow-md rounded-lg p-6">
            <RecommendationList recommendations={recommendations} />
          </div>
        </section>

        <BackToTopButton />
      </main>

      <Footer />
    </>
  );
}

export default App;
