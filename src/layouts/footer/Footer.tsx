import { BiSpa } from "react-icons/bi"; 
import { FaTelegramPlane } from "react-icons/fa"; 
import { AiOutlineWhatsApp } from "react-icons/ai"; 
import { AiOutlineInstagram } from "react-icons/ai"; 
import { CgFacebook } from "react-icons/cg"; 
import React from 'react'
import { Link } from 'react-router-dom'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import FlickeringGrid from "@/components/ui/flickering-grid";
import { TextAnimate } from "@/components/ui/text-animate";
// import { FootersLinks, SocialLink } from '@/core/mocks/footer.mock'

const Footer: React.FC = () => {
  const footerLinks = {
    services: [
      'Coiffure',
      'Massages', 
      'Gommages & Soins',
      'Spa Complet',
      'Beauté des mains/pieds',
      'Maquillage'
    ],
    informations: [
      'À propos',
      'Équipe',
      'Témoignages',
      'FAQ',
      'Blog beauté',
      'Galerie photos'
    ],
    legal: [
      'Mentions légales',
      'Politique de confidentialité',
      'Conditions générales',
      'Politique d\'annulation'
    ]
  };

  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <i className="fas fa-spa mr-2 text-pink-400"> <BiSpa /></i> Élégance Beauty
            </h3>
            <p className="text-gray-400">
              Salon d'esthétique mixte à Yaoundé-Melen, spécialisé en coiffure, massage, gommage et spa.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white">{service}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Informations</h4>
            <ul className="space-y-2">
              {footerLinks.informations.map((info, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white">{info}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Abonnez-vous pour recevoir nos offres spéciales et conseils beauté.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-800" 
              />
              <button 
                type="submit" 
                className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-r-md"
              >
               <FaTelegramPlane />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; 2025 Élégance Beauty. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <CgFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <AiOutlineInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <AiOutlineWhatsApp />
            </a>
          </div>
        </div>
      </div>

<div className="border-t border-t-foreground/40 w-full px-1 py-[3px] space-x-1 font-light text-sm flex justify-center bg-foreground/50">
<span>Designed and developped by</span>

<TooltipProvider
  delayDuration={100}
>
  <Tooltip>
    <TooltipTrigger>
      <Link
        to={'https://www.linkedin.com/in/hermanmoukam/'}
        target='_blank'
        rel="noopener noreferrer"
        className='font-normal text-primary/70 hover:text-primary/70 hover:underline duration-200 text-nowrap'
      >
        Herman Moukam
      </Link>
    </TooltipTrigger>

    <TooltipContent className='px-6 py-2 relative bg-footer border border-footer-foreground text-footer-foreground text-xs'>
      <p className='relative z-30 space-y-3 leading-4'>
        <p className="flex flex-col gap-2">
          <span className="bg-footer w-fit">
            <TextAnimate animation="slideLeft" by="character">
              Hello, I am Herman Moukam,
            </TextAnimate>
          </span>
          <p className="">
            <span className="bg-footer">
              I am a passionate <b>full-stack web</b> developer,
            </span>
            <br />
            <span className="bg-footer">
              specializing in crafting efficient and tailored digital solutions.
            </span>
            <br />
            <span className="bg-footer">
              An expert in transforming ideas into modern applications,
            </span>
            <br />
            <span className="bg-footer">
              I combine creativity with technical precision.
            </span>
            <br />
            <span className="bg-footer">
              Always seeking innovation, I am committed to tackling
            </span>
            <br />
            <span className="bg-footer">
              digital challenges with professionalism and efficiency.
            </span>
          </p>
        </p>

        <p className="flex items-center gap-10">
          <p className="bg-footer flex flex-col leading-3 w-fit">
            <span>Do you want to</span>
            <span>contact me ?</span>
          </p>

          {/* Contact Informations */}
          <div className="leading-4">
            <p className="bg-footer w-fit">
              Linkedin:
              <Link
                to={'https://www.linkedin.com/in/hermanmoukam/'}
                target='_blank'
                className='font-medium text-primary/85 hover:text-primary duration-200 text-nowrap'
              >
                <TextAnimate animation="blurIn" className='inline ml-2'>
                  My LinkedIn profile
                </TextAnimate>
              </Link>
            </p>

            <p className="bg-footer w-fit">
              Whatsapp:
              <Link
                to={'https://wa.me/237658852731?text=bonjour%20Herman%20Moukam'}
                target='_blank'
                rel="noopener noreferrer"
                className='font-medium text-primary/85 hover:text-primary duration-200 text-nowrap'
              >
                <TextAnimate animation="blurIn" by="character" className='inline ml-2'>
                  +237 658 852 731
                </TextAnimate>
              </Link>
            </p>
          </div>
        </p>
      </p>

      <FlickeringGrid
        className="z-0 absolute inset-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#2f22f2"
        maxOpacity={0.3}
        flickerChance={0.8}
        height={800}
        width={800}
      />
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
</div>
    </footer>
  );
};

export default Footer;


