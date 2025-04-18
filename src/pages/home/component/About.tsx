import { AiFillSmile } from "react-icons/ai"; 
import { FaLeaf } from "react-icons/fa"; 
import { FaAward } from "react-icons/fa"; 
import React from 'react';

const About: React.FC = () => {
  const features = [
    {
      icon: <FaAward />,
      title: 'Certifications',
      description: 'Nos esthéticiennes sont diplômées des meilleures écoles'
    },
    {
      icon: <FaLeaf />,
      title: 'Approche naturelle',
      description: 'Nous privilégions les produits naturels et locaux'
    },
    {
      icon: <AiFillSmile />,
      title: 'Satisfaction client',
      description: 'Plus de 2000 clients satisfaits depuis notre ouverture'
    }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Notre Histoire</h2>
            <p className="text-gray-600 mb-4">
  Fondé en 2018 à Yaoundé-Melen par Claire M., une experte en esthétique avec plus de 15 ans d'expérience internationale, 
  Élégance Beauty est rapidement devenu une référence en matière de soins esthétiques et de bien-être. Notre salon mixte 
  a été créé avec la vision d'offrir un espace où hommes et femmes pourraient prendre soin d'eux dans un environnement 
  chic et relaxant, combinant savoir-faire international et traditions locales.
</p>
<p className="text-gray-600 mb-6">
  Nous sélectionnons avec soin nos produits parmi les meilleures marques africaines et internationales, et formons 
  continuellement notre équipe pour vous proposer des services à la pointe des tendances tout en respectant les 
  traditions africaines de beauté. Notre engagement : qualité, hygiène irréprochable et satisfaction client.
</p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 bg-pink-100 p-3 rounded-lg text-pink-600">
                    <i className={`$`}>
                    {feature.icon}
                    </i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Salon Élégance Beauty" 
              className="w-full h-auto rounded-lg" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;