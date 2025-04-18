import { FaPaintBrush } from "react-icons/fa"; 
import { FaHandHoldingWater } from "react-icons/fa"; 
import { FaHotTub } from "react-icons/fa"; 
import { FaHandSparkles } from "react-icons/fa"; 
import { BiSpa } from "react-icons/bi"; 
import { BiCut } from "react-icons/bi"; 
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Coiffure Mixte',
      icon: <BiCut />,
      image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
      description: 'Coupes modernes, coloration, brushing, tresses africaines, dreadlocks et soins capillaires pour hommes et femmes.',
      items: [
        'Coupe femme : 5 000 - 15 000 FCFA',
        'Coupe homme : 3 000 - 10 000 FCFA',
        'Tresses : À partir de 10 000 FCFA'
      ]
    },
    {
      id: 2,
      title: 'Massages',
      icon: <BiSpa />,
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      description: 'Détendez-vous avec nos massages relaxants, thérapeutiques ou énergisants, adaptés à vos besoins.',
      items: [
        'Massage relaxant : 15 000 - 30 000 FCFA',
        'Massage aux pierres chaudes : 25 000 FCFA',
        'Massage sportif : 20 000 FCFA'
      ]
    },
    {
        id: 3,
        title: 'Gommages & Soins',
        icon: <FaHandSparkles />,
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        description: 'Purifiez et régénerez votre peau avec nos gommages corporels et soins du visage sur mesure.',
        items: [
          'Gommage corps : 15 000 FCFA',
          'Soin du visage : 10 000 - 20 000 FCFA',
          'Épilation : À partir de 5 000 FCFA',
          'Soin hydratant corps : 18 000 FCFA',
          'Soin anti-âge : 25 000 FCFA'
        ]
      },
      {
        id: 4,
        title: 'Spa Complet',
        icon: <FaHotTub />,
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        description: 'Offrez-vous une journée de détente avec nos forfaits spa complets incluant bain, massage et soins.',
        items: [
          'Spa demi-journée : 35 000 FCFA',
          'Spa journée : 60 000 FCFA',
          'Forfait couple : 100 000 FCFA',
          'Spa maternité : 45 000 FCFA',
          'Spa détente express : 25 000 FCFA'
        ]
      },
      {
        id: 5,
        title: 'Beauté des Mains & Pieds',
        icon: <FaHandHoldingWater />,
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        description: 'Soins complets pour vos mains et pieds avec vernis semi-permanent et motifs africains.',
        items: [
          'Manucure : 7 000 - 15 000 FCFA',
          'Pédicure : 10 000 - 20 000 FCFA',
          'Forfait complet : 25 000 FCFA',
          'Vernis semi-permanent : 12 000 FCFA',
          'Décoration africaine : +5 000 FCFA'
        ]
      },
      {
        id: 6,
        title: 'Maquillage Professionnel',
        icon: <FaPaintBrush />,
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        description: 'Maquillage pour tous vos événements : mariages, soirées, photoshoots avec produits haut de gamme.',
        items: [
          'Maquillage jour : 15 000 FCFA',
          'Maquillage soirée : 25 000 FCFA',
          'Maquillage mariée : 35 000 - 50 000 FCFA',
          'Maquillage spécial effets : 30 000 FCFA',
          'Cours de maquillage : 40 000 FCFA/séance'
        ]
      }
  ];

  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Nos Services</h2>
          <p className="mt-2 text-gray-600">Découvrez notre gamme complète de soins esthétiques</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service.id} className="service-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-pink-100 p-3 rounded-full mr-4">
                    <i className={`$ text-pink-600`}> {service.icon}</i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  {service.items.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <i className="fas fa-check text-pink-500 mr-2"></i>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-md font-medium">
                  Réserver
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;