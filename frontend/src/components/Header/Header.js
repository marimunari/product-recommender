// system
import React from 'react';

function Header({ logoSrc, logoAlt = 'Logo', showTitle = false, title = '', description = '' }) {
  return (
    <header className="bg-white shadow-sm py-6">
      <div className="container mx-auto flex flex-col items-center px-4">
        <img
          src={logoSrc}
          alt={logoAlt}
          className="h-16 w-auto mb-4"
          loading="lazy"
          aria-hidden="false"
        />
        {showTitle && (
          <>
            <h1
              className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-primary bg-clip-text text-[#003c5b]"
              tabIndex={-1}
              aria-label={title}
            >
              {title}
            </h1>
            {description && (
              <p
                className="text-lg text-muted-foreground max-w-4xl text-center"
                role="region"
                aria-live="polite"
              >
                {description}
              </p>
            )}
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
