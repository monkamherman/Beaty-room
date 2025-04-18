import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Marie T.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      comment: '"Je me fais toujours tresser chez Élégance Beauty. Aïcha est une artiste et les produits utilisés sont de qualité. Je recommande vivement !"'
    },
    {
        name: 'Paul D.',
        rating: 4.5,
        image: 'https://randomuser.me/api/portraits/men/44.jpg',
        comment: '"Le massage de Jean m\'a littéralement sauvé le dos après des mois de douleurs. Professionnel et à l\'écoute. Je reviendrai !"',
        service: 'Massage thérapeutique',
        date: '2 avril 2023'
      },
      {
        name: 'Amina K.',
        rating: 5,
        image: 'https://randomuser.me/api/portraits/women/75.jpg',
        comment: '"Forfait spa offert pour mon anniversaire. Une journée de pur bonheur ! L\'équipe est aux petits soins et l\'endroit magnifique."',
        service: 'Spa journée',
        date: '22 février 2023'
      },
      {
        name: 'Sophie L.',
        rating: 5,
        image: 'https://randomuser.me/api/portraits/women/63.jpg',
        comment: '"Maquillage de mariée parfait ! Claire a su comprendre mon style et a fait un travail exceptionnel qui a tenu toute la journée."',
        service: 'Maquillage mariée',
        date: '10 juin 2023'
      },
      {
        name: 'Marc A.',
        rating: 4,
        image: 'https://randomuser.me/api/portraits/men/29.jpg',
        comment: '"Première expérience dans un salon mixte très positive. Coupe moderne et conseils personnalisés. Ambiance détendue."',
        service: 'Coupe homme',
        date: '5 mai 2023'
      },
      {
        name: 'Nadège F.',
        rating: 5,
        image: 'https://randomuser.me/api/portraits/women/82.jpg',
        comment: '"Soin du visage avec Fatou a redonné éclat à ma peau. Produits naturels et efficaces. Je reviens chaque mois !"',
        service: 'Soin du visage',
        date: '18 janvier 2023'
      }
  ];

  return (
    <section className="py-16 bg-pink-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Témoignages</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Ce que nos clients disent de nous
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card p-8 rounded-xl bg-white bg-opacity-90 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img className="h-12 w-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-800">{testimonial.name}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i} 
                        className={`fas ${i < testimonial.rating ? 'fa-star' : 'fa-star-half-alt'}`}
                      ></i>
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic text-gray-700">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;