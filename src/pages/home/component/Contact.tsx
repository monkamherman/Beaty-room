import React from 'react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Adresse',
      details: ['Rue de Melen, Yaoundé, Cameroun'],
      link: { text: 'Voir sur la carte', icon: 'fas fa-directions' }
    },
    {
      icon: 'fas fa-phone-alt',
      title: 'Téléphone',
      details: ['+237 699 999 999', '+237 677 777 777']
    },
    // Ajouter les autres informations de contact
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Prenez Rendez-vous</h2>
          <p className="mt-2 text-gray-600">Contactez-nous pour réserver votre séance de beauté</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                  <input type="text" id="first-name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500" />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                  <input type="text" id="last-name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                <input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500" />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                <select id="service" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500">
                  <option>Sélectionnez un service</option>
                  <option>Coiffure</option>
                  <option>Massage</option>
                  <option>Gommage & Soins</option>
                  <option>Spa</option>
                  <option>Manucure/Pédicure</option>
                  <option>Maquillage</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-md font-medium">
                  Envoyer la demande
                </button>
              </div>
            </form>
          </div>
          
          <div>
            <div className="bg-gray-50 p-8 rounded-xl h-full">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Nos Coordonnées</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 bg-pink-100 p-3 rounded-lg text-pink-600">
                      <i className={`${info.icon}`}></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800">{info.title}</h4>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600">{detail}</p>
                      ))}
                      {info.link && (
                        <a href="#" className="inline-block mt-2 text-pink-600 hover:text-pink-700 font-medium">
                          <i className={`${info.link.icon} mr-2`}></i> {info.link.text}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium text-gray-800 mb-4">Nous suivre</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;