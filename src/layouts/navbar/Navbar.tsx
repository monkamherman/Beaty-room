import { BiSpa } from "react-icons/bi"; 
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <i className="fas fa-spa text-2xl text-pink-600 mr-2"> <BiSpa /></i>
              <span className="text-xl font-bold text-gray-900">Élégance Beauty</span>
            </div>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <a href="#" className="text-gray-900 hover:text-pink-600 px-3 py-2 font-medium">Accueil</a>
            <a href="#services" className="text-gray-900 hover:text-pink-600 px-3 py-2 font-medium">Services</a>
            <a href="#team" className="text-gray-900 hover:text-pink-600 px-3 py-2 font-medium">Équipe</a>
            <a href="#about" className="text-gray-900 hover:text-pink-600 px-3 py-2 font-medium">À propos</a>
            <a href="#contact" className="text-gray-900 hover:text-pink-600 px-3 py-2 font-medium">Contact</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:+237699999999" className="hidden md:flex items-center text-gray-700 hover:text-pink-600">
              <i className="fas fa-phone-alt mr-2"></i>
              <span>+237 699 999 999</span>
            </a>
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-gray-700 hover:text-pink-600"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
          <a href="#" className="block px-3 py-2 text-gray-900 hover:text-pink-600 font-medium">Accueil</a>
          <a href="#services" className="block px-3 py-2 text-gray-900 hover:text-pink-600 font-medium">Services</a>
          <a href="#team" className="block px-3 py-2 text-gray-900 hover:text-pink-600 font-medium">Équipe</a>
          <a href="#about" className="block px-3 py-2 text-gray-900 hover:text-pink-600 font-medium">À propos</a>
          <a href="#contact" className="block px-3 py-2 text-gray-900 hover:text-pink-600 font-medium">Contact</a>
          <a href="tel:+237699999999" className="block px-3 py-2 text-gray-900 hover:text-pink-600 font-medium">
            <i className="fas fa-phone-alt mr-2"></i> +237 699 999 999
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;