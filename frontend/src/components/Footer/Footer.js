// system
import React from 'react';

function Footer() {
  return (
    <footer className="text-center text-muted-foreground text-sm py-6 mt-auto bg-background dark:bg-gray-900">
      © {new Date().getFullYear()} RD Station. Todos os direitos reservados.
    </footer>
  );
}

export default Footer;
