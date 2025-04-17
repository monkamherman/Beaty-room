import { AiFillHeart } from "react-icons/ai"; 
import { FaSeedling } from "react-icons/fa"; 
import { FaCertificate } from "react-icons/fa"; 
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <FaCertificate />,
      title: 'Professionnels qualifiés',
      description: 'Notre équipe est formée aux dernières techniques d\'esthétique'
    },
    {
      icon: <FaSeedling />,
      title: 'Produits naturels',
      description: 'Nous utilisons des produits bio et respectueux de votre peau'
    },
    {
      icon: <AiFillHeart />,
      title: 'Ambiance zen',
      description: 'Un cadre apaisant pour une expérience de détente optimale'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={` text-pink-600 text-2xl`}> {feature.icon}</i>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;