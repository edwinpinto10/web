import React, { useState } from 'react';

const PrivateArea = () => {
  const [currentSection, setCurrentSection] = useState('welcome');

  const renderContent = () => {
    switch (currentSection) {
      case 'welcome':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-4">Bienvenido al Área Privada</h1>
            <p className="text-gray-600">
              Seleccione una opción del menú para comenzar a gestionar su cuenta.
            </p>
          </div>
        );
      case 'panel':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Panel de Control</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Contenido del panel */}
            </div>
          </div>
        );
      case 'events':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Gestión de Eventos</h2>
            {/* Contenido de eventos */}
          </div>
        );
      case 'appointments':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Gestión de Citas</h2>
            {/* Contenido de citas */}
          </div>
        );
      case 'docs':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Documentación</h2>
            {/* Contenido de documentación */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">Área Privada</h2>
        </div>
        <nav className="mt-4">
          <button 
            onClick={() => setCurrentSection('welcome')}
            className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-blue-50">
            Bienvenido
          </button>
          <button 
            onClick={() => setCurrentSection('panel')}
            className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-blue-50">
            Panel de Control
          </button>
          <button 
            onClick={() => setCurrentSection('events')}
            className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-blue-50">
            Gestión de eventos
          </button>
          <button 
            onClick={() => setCurrentSection('appointments')}
            className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-blue-50">
            Gestión de citas
          </button>
          <button 
            onClick={() => setCurrentSection('docs')}
            className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-blue-50">
            Documentación
          </button>
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 p-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default PrivateArea;