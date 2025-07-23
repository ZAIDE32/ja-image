import React from 'react';
import { Clock, Users, Award, CheckCircle, Calendar, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Formations = () => {
  const formations = [
    {
      id: 1,
      title: "Ciné Cour School - Formation Complète",
      type: "Formation Intensive",
      duration: "9 mois",
      level: "Débutant à Intermédiaire",
      participants: 30,
      price: "Gratuit",
      status: "Inscriptions ouvertes",
      startDate: "Septembre 2025",
      description: "Programme complet d'initiation et de perfectionnement aux métiers du cinéma, spécialement conçu pour les jeunes autodidactes passionnés.",
      modules: [
        "Écriture de scénario et développement d'histoires",
        "Techniques de prise de vue et cadrage",
        "Direction d'acteurs et coaching",
        "Montage vidéo et post-production",
        "Son et mixage audio",
        "Production et gestion de projet",
        "Distribution et promotion de films"
      ],
      benefits: [
        "Matériel professionnel fourni",
        "Encadrement par des professionnels",
        "Certification reconnue",
        "Stage en production réelle",
        "Réseau professionnel",
        "Suivi post-formation"
      ],
      requirements: [
        "Âge : 16 à 25 ans",
        "Passion pour le cinéma",
        "Motivation et engagement",
        "Disponibilité 3 jours/semaine"
      ]
    },
    {
      id: 2,
      title: "Ateliers Weekend - Initiation",
      type: "Ateliers Pratiques",
      duration: "2 jours",
      level: "Débutant",
      participants: 15,
      price: "50 000 FCFA",
      status: "Places disponibles",
      startDate: "Chaque mois",
      description: "Ateliers intensifs de weekend pour découvrir les bases du cinéma et réaliser son premier court-métrage.",
      modules: [
        "Introduction au langage cinématographique",
        "Prise en main des équipements",
        "Exercices pratiques de tournage",
        "Initiation au montage",
        "Projection et analyse collective"
      ],
      benefits: [
        "Apprentissage accéléré",
        "Petit groupe personnalisé",
        "Réalisation d'un film",
        "Certificat de participation"
      ],
      requirements: [
        "Aucun prérequis",
        "Ouvert à tous âges",
        "Apporter sa créativité"
      ]
    },
    {
      id: 3,
      title: "Masterclass Professionnelles",
      type: "Perfectionnement",
      duration: "1 jour",
      level: "Intermédiaire à Avancé",
      participants: 20,
      price: "25 000 FCFA",
      status: "Sur inscription",
      startDate: "Trimestriel",
      description: "Sessions spécialisées animées par des professionnels reconnus du cinéma africain et international.",
      modules: [
        "Techniques avancées selon le thème",
        "Retours d'expérience professionnels",
        "Études de cas concrets",
        "Networking avec les intervenants"
      ],
      benefits: [
        "Expertise de haut niveau",
        "Contacts professionnels",
        "Certificat de participation",
        "Accès aux ressources exclusives"
      ],
      requirements: [
        "Expérience préalable recommandée",
        "Portfolio ou réalisations",
        "Motivation professionnelle"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Aminata Traoré",
      age: 22,
      formation: "Ciné Cour School 2024",
      text: "Cette formation a transformé ma passion en véritable compétence professionnelle. Aujourd'hui, je travaille comme assistante réalisatrice sur des productions nationales.",
      rating: 5
    },
    {
      name: "Ibrahim Koné",
      age: 19,
      formation: "Ateliers Weekend",
      text: "En deux jours, j'ai appris plus que ce que j'imaginais possible. L'équipe est fantastique et le matériel de qualité professionnelle.",
      rating: 5
    },
    {
      name: "Fatoumata Diallo",
      age: 24,
      formation: "Masterclass",
      text: "Les masterclass m'ont permis de perfectionner mes techniques et de rencontrer des professionnels qui m'ont ouvert des portes.",
      rating: 5
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Inscriptions ouvertes':
        return 'bg-green-100 text-green-800';
      case 'Places disponibles':
        return 'bg-blue-100 text-blue-800';
      case 'Sur inscription':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="formations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos Formations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Développez vos compétences cinématographiques avec nos programmes adaptés 
            à tous les niveaux, de l'initiation au perfectionnement professionnel.
          </p>
        </div>

        {/* Formations Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {formations.map((formation) => (
            <div key={formation.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Header Card */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm font-medium opacity-90">{formation.type}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(formation.status)}`}>
                    {formation.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{formation.title}</h3>
                <p className="text-sm opacity-90">{formation.description}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-500 mr-2" />
                    <div>
                      <p className="text-sm text-gray-600">Durée</p>
                      <p className="font-semibold">{formation.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-blue-500 mr-2" />
                    <div>
                      <p className="text-sm text-gray-600">Participants</p>
                      <p className="font-semibold">{formation.participants}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-blue-500 mr-2" />
                    <div>
                      <p className="text-sm text-gray-600">Niveau</p>
                      <p className="font-semibold text-sm">{formation.level}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-blue-500 mr-2" />
                    <div>
                      <p className="text-sm text-gray-600">Début</p>
                      <p className="font-semibold text-sm">{formation.startDate}</p>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-gray-900">{formation.price}</span>
                  {formation.price !== "Gratuit" && <span className="text-gray-600 ml-1">/ personne</span>}
                </div>

                {/* Modules */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Programme :</h4>
                  <ul className="space-y-2">
                    {formation.modules.slice(0, 3).map((module, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{module}</span>
                      </li>
                    ))}
                    {formation.modules.length > 3 && (
                      <li className="text-sm text-blue-600 font-medium">
                        +{formation.modules.length - 3} autres modules
                      </li>
                    )}
                  </ul>
                </div>

                {/* CTA */}
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  S'inscrire maintenant
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-2xl p-12 mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Comment s'inscrire ?
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Candidature</h4>
              <p className="text-gray-600 text-sm">Remplissez le formulaire en ligne avec vos motivations</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Entretien</h4>
              <p className="text-gray-600 text-sm">Échange avec notre équipe pour évaluer votre projet</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Sélection</h4>
              <p className="text-gray-600 text-sm">Notification de votre admission dans les 48h</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Formation</h4>
              <p className="text-gray-600 text-sm">Début de votre parcours d'apprentissage</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Témoignages d'anciens participants
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.age} ans • {testimonial.formation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Des questions sur nos formations ?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Notre équipe est là pour vous accompagner dans votre choix et répondre à toutes vos interrogations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Consulter la FAQ
            </Button>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Nous contacter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formations;

