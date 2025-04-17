import React from 'react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Aïcha N.',
      role: 'Coiffeuse & Maquilleuse',
      image: 'https://randomuser.me/api/portraits/women/43.jpg',
      description: 'Spécialiste des tresses africaines et du maquillage pour peaux mates.'
    },
    {
      name: 'Jean K.',
      role: 'Massothérapeute',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      description: 'Expert en massages thérapeutiques et relaxation profonde.'
    },
    // Ajouter les autres membres de l'équipe
  ];

  return (
    <section id="team" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Notre Équipe</h2>
          <p className="mt-2 text-gray-600">Des professionnels passionnés à votre service</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member bg-white rounded-lg overflow-hidden shadow-md text-center transition duration-300">
              <div className="h-64 overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover transition duration-500 hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-pink-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-pink-600">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-pink-600">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;