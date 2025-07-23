import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'general'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "contact@ja-image.org",
      description: "Réponse sous 24h en moyenne"
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: "+223 XX XX XX XX",
      description: "Lun-Ven: 9h-17h"
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: "Quartier Hippodrome, Bamako, Mali",
      description: "Près du Centre Culturel Français"
    },
    {
      icon: Clock,
      title: "Horaires",
      details: "Lun-Ven: 9h-17h",
      description: "Sam: 9h-13h sur RDV"
    }
  ];

  const contactTypes = [
    {
      id: 'general',
      title: 'Information générale',
      description: 'Questions sur nos activités et programmes'
    },
    {
      id: 'formation',
      title: 'Inscription formation',
      description: 'Candidature et informations sur nos formations'
    },
    {
      id: 'partenariat',
      title: 'Partenariat',
      description: 'Propositions de collaboration et partenariat'
    },
    {
      id: 'presse',
      title: 'Presse & Médias',
      description: 'Demandes d\'interview et informations presse'
    }
  ];

  const team = [
    {
      name: "Amadou Sangaré",
      position: "Directeur Général",
      email: "direction@ja-image.org",
      phone: "+223 XX XX XX XX",
      speciality: "Vision stratégique et partenariats"
    },
    {
      name: "Fatoumata Keita",
      position: "Responsable Formations",
      email: "formations@ja-image.org",
      phone: "+223 XX XX XX XX",
      speciality: "Programmes pédagogiques et suivi des apprenants"
    },
    {
      name: "Ibrahim Traoré",
      position: "Coordinateur Projets",
      email: "projets@ja-image.org",
      phone: "+223 XX XX XX XX",
      speciality: "Production et réalisation de films"
    },
    {
      name: "Aminata Diallo",
      position: "Relations Partenaires",
      email: "partenaires@ja-image.org",
      phone: "+223 XX XX XX XX",
      speciality: "Développement de partenariats et communication"
    }
  ];

  const faq = [
    {
      question: "Comment puis-je m'inscrire à vos formations ?",
      answer: "Les inscriptions se font en ligne via notre formulaire de candidature. Après étude de votre dossier, nous vous contacterons pour un entretien."
    },
    {
      question: "Vos formations sont-elles gratuites ?",
      answer: "La formation Ciné Cour School est entièrement gratuite. Les ateliers weekend et masterclass sont payants mais à prix très accessibles."
    },
    {
      question: "Faut-il avoir de l'expérience en cinéma ?",
      answer: "Non, nos programmes s'adressent particulièrement aux autodidactes et débutants passionnés. La motivation est plus importante que l'expérience."
    },
    {
      question: "Proposez-vous des formations en ligne ?",
      answer: "Actuellement, nos formations sont principalement en présentiel à Bamako. Nous développons des modules en ligne complémentaires."
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une question, un projet, une envie de nous rejoindre ? 
            Notre équipe est là pour vous accompagner dans votre démarche.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Envoyez-nous un message
              </h3>

              {/* Contact Type Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Type de demande
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {contactTypes.map((type) => (
                    <label key={type.id} className="relative">
                      <input
                        type="radio"
                        name="type"
                        value={type.id}
                        checked={formData.type === type.id}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                        formData.type === type.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <h4 className="font-semibold text-gray-900 text-sm">{type.title}</h4>
                        <p className="text-xs text-gray-600 mt-1">{type.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+223 XX XX XX XX"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Objet de votre message"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Décrivez votre demande en détail..."
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3">
                  <Send className="mr-2 h-5 w-5" />
                  Envoyer le message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Informations de contact
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{info.title}</h4>
                        <p className="text-gray-700 font-medium">{info.details}</p>
                        <p className="text-sm text-gray-500">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Actions rapides</h3>
              
              <div className="space-y-3">
                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-blue-600">
                  <Calendar className="mr-2 h-4 w-4" />
                  Prendre RDV
                </Button>
                
                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-blue-600">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat WhatsApp
                </Button>
                
                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-blue-600">
                  <Users className="mr-2 h-4 w-4" />
                  Visite des locaux
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Notre équipe à votre service
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-blue-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {member.speciality}
                </p>
                
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700">{member.email}</p>
                  <p className="text-gray-700">{member.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-lg p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Questions fréquentes
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {faq.map((item, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.question}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              Voir toutes les FAQ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

