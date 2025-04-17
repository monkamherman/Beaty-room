import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Marie T.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      comment: '"Je me fais toujours tresser chez Élégance Beauty. Aïcha est une artiste et les produits utilisés sont de qualité. Je recommande vivement !"'
    },
    // Ajouter les autres témoignages
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