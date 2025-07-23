import React from 'react';
import { Camera, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    association: [
      { name: 'À propos', href: '#association' },
      { name: 'Notre équipe', href: '#equipe' },
      { name: 'Nos valeurs', href: '#valeurs' },
      { name: 'Statuts', href: '#statuts' }
    ],
    projets: [
      { name: 'Formations', href: '#formations' },
      { name: 'Productions', href: '#productions' },
      { name: 'Ateliers', href: '#ateliers' },
      { name: 'Événements', href: '#evenements' }
    ],
    ressources: [
      { name: 'Actualités', href: '#actualites' },
      { name: 'Galerie', href: '#galerie' },
      { name: 'Témoignages', href: '#testimonials' },
      { name: 'FAQ', href: '#faq' }
    ],
    legal: [
      { name: 'Mentions légales', href: '#mentions' },
      { name: 'Politique de confidentialité', href: '#privacy' },
      { name: 'Conditions d\'utilisation', href: '#terms' },
      { name: 'Contact', href: '#contact' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">JA IMAGE</h3>
                <p className="text-gray-400 text-sm">Cinéma & Jeunes Talents</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Association dédiée à la promotion du cinéma et à l'accompagnement des jeunes 
              autodidactes dans leur parcours cinématographique.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">contact@ja-image.org</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">+223 XX XX XX XX</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">Bamako, Mali</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Association</h4>
            <ul className="space-y-2">
              {footerLinks.association.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Projets</h4>
            <ul className="space-y-2">
              {footerLinks.projets.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Ressources</h4>
            <ul className="space-y-2">
              {footerLinks.ressources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Légal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="text-lg font-semibold mb-4">Restez informé</h4>
            <p className="text-gray-300 mb-4">
              Recevez nos dernières actualités et opportunités directement dans votre boîte mail.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-r-lg transition-colors duration-200">
                S'abonner
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} JA IMAGE. Tous droits réservés.
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  <IconComponent className="h-6 w-6" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

