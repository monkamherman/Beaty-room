import React from 'react';

const Map: React.FC = () => {
  return (
    <div className="h-96 w-full">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.810316625383!2d11.4883143147639!3d3.866863397060112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bc363a6e5f3a9%3A0x3e3a6c5e6e5f3a9!2sMelen%2C%20Yaound%C3%A9%2C%20Cameroun!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy"
        title="Localisation du salon"
      ></iframe>
    </div>
  );
};

export default Map;