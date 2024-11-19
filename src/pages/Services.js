import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Siembra Ecológica',
      description: 'Implementación de técnicas agrícolas sostenibles y respetuosas con el medio ambiente.',
      icon: '🌱'
    },
    {
      title: 'Riego Automático',
      description: 'Sistemas inteligentes de irrigación para optimizar el uso del agua.',
      icon: '💧'
    },
    {
      title: 'Cuidado Ambiental',
      description: 'Prácticas y soluciones para la preservación del ecosistema.',
      icon: '🌿'
    },
    {
      title: 'Procesamiento de Residuos',
      description: 'Gestión y tratamiento sostenible de residuos agrícolas.',
      icon: '♻️'
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-sunsuca-green mb-8">Nuestros Servicios</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-bold text-sunsuca-green mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
