import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* Logo */}
            <div className="flex items-center py-5 px-2">
              <div className="flex items-center space-x-2">
                <img src="/api/placeholder/32/32" alt="Logo" className="h-8 w-8"/>
                <span className="font-bold text-white text-lg">SUNSUCA</span>
              </div>
            </div>

            {/* Primary Nav */}
            <div className="hidden md:flex items-center space-x-1">
              <button className="py-5 px-3 text-white hover:bg-blue-700 transition duration-300">
                Inicio
              </button>
              <button className="py-5 px-3 text-white hover:bg-blue-700 transition duration-300">
                Servicios
              </button>
              <button className="py-5 px-3 text-white hover:bg-blue-700 transition duration-300">
                Galería
              </button>
            </div>
          </div>

          {/* Secondary Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {isAuthenticated ? (
              <>
                <button className="py-5 px-3 text-white hover:bg-blue-700 transition duration-300">
                  Área Privada
                </button>
                <button
                  onClick={() => setIsAuthenticated(false)}
                  className="py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded transition duration-300"
                >
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <button 
                onClick={() => setIsAuthenticated(true)}
                className="py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded transition duration-300">
                Iniciar Sesión
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <button className="block w-full text-left py-2 px-4 text-white hover:bg-blue-700">Inicio</button>
          <button className="block w-full text-left py-2 px-4 text-white hover:bg-blue-700">Servicios</button>
          <button className="block w-full text-left py-2 px-4 text-white hover:bg-blue-700">Galería</button>
          {isAuthenticated ? (
            <>
              <button className="block w-full text-left py-2 px-4 text-white hover:bg-blue-700">Área Privada</button>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="block w-full text-left py-2 px-4 text-white hover:bg-blue-700"
              >
                Cerrar Sesión
              </button>
            </>
          ) : (
            <button 
              onClick={() => setIsAuthenticated(true)}
              className="block w-full text-left py-2 px-4 text-white hover:bg-blue-700">
              Iniciar Sesión
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;