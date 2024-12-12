import React from 'react';
import Logo from './Logo';

const ModernHeader = () => {
  return (
    <header className="w-full py-6 px-8">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          {/* Logo à gauche */}
          <Logo className="w-32 h-auto" />

          {/* Titre du site (au centre) */}
          <h1 className="text-4xl font-bold text-black">
            Provatars
          </h1>

          {/* Lien "Voir notre site" (à droite) */}
          <a
            href="#"
            className="flex items-center text-[#009CF5] hover:text-[#007BC5] transition-colors duration-200"
          >
            <span className="mr-2">Voir notre site</span>
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default ModernHeader; 