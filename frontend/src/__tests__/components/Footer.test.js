// system
import React from 'react';

// external libs
import { render, screen } from '@testing-library/react';

// internal components
import Footer from '../../components/Footer/Footer';

describe('Footer', () => {
  test('Renderiza com o ano atual e texto correto', () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    const footerText = screen.getByText(`© ${year} RD Station. Todos os direitos reservados.`);
    expect(footerText).toBeInTheDocument();
  });
});
