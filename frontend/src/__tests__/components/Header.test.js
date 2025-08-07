// system
import React from 'react';

// external libs
import { render, screen } from '@testing-library/react';

// internal components
import Header from '../../components/Header/Header';

describe('Header', () => {
  const logoSrc = 'logo.png';
  const logoAlt = 'Logo da Empresa';
  const title = 'Título Principal';
  const description = 'Descrição do site ou app';

  test('Renderiza o logo com src e alt corretos', () => {
    render(<Header logoSrc={logoSrc} logoAlt={logoAlt} />);
    const logoImg = screen.getByAltText(logoAlt);
    expect(logoImg).toBeInTheDocument();
    expect(logoImg).toHaveAttribute('src', logoSrc);
  });

  test('Não renderiza título e descrição quando showTitle é falso', () => {
    render(<Header logoSrc={logoSrc} showTitle={false} />);
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
    expect(screen.queryByText(description)).not.toBeInTheDocument();
  });

  test('Renderiza título e descrição quando showTitle é verdadeiro', () => {
    render(
      <Header
        logoSrc={logoSrc}
        showTitle={true}
        title={title}
        description={description}
      />
    );

    const heading = screen.getByRole('heading', { name: title });
    expect(heading).toBeInTheDocument();

    const desc = screen.getByText(description);
    expect(desc).toBeInTheDocument();
    expect(desc).toHaveAttribute('role', 'region');
    expect(desc).toHaveAttribute('aria-live', 'polite');
  });
});
