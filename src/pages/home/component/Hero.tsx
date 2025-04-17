import React from 'react';

const Hero:React.FC = () => {
  return (
    <section 
      className="hero-bg h-96 flex items-center justify-center text-white"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Élégance Beauty Salon</h1>
        <p className="text-xl md:text-2xl mb-8">Votre oasis de beauté et de bien-être à Yaoundé-Melen</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contact" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-md font-medium text-lg">
            Prendre rendez-vous
          </a>
          <a href="#services" className="bg-white hover:bg-gray-100 text-pink-600 px-8 py-3 rounded-md font-medium text-lg">
            Nos services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;