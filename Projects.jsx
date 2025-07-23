import React from 'react';
import { Calendar, MapPin, Users, Play, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import jeunesFilmImage from '../assets/jeunes-film-amboise.jpg';
import tournageImage from '../assets/jeunes-tournage.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Ciné Cour School",
      category: "Formation",
      description: "Programme intensif de formation aux métiers du cinéma pour jeunes autodidactes de 16 à 25 ans.",
      image: jeunesFilmImage,
      date: "Septembre 2024 - Juin 2025",
      location: "Bamako, Mali",
      participants: 30,
      status: "En cours",
      highlights: [
        "Formation de 9 mois",
        "Matériel professionnel fourni",
        "Certification reconnue",
        "Stage en production"
      ]
    },
    {
      id: 2,
      title: "Voix de la Jeunesse",
      category: "Production",
      description: "Série documentaire donnant la parole aux jeunes sur les enjeux sociétaux contemporains.",
      image: tournageImage,
      date: "Mars 2024 - Décembre 2024",
      location: "Plusieurs villes du Mali",
      participants: 15,
      status: "Post-production",
      highlights: [
        "6 épisodes de 26 minutes",
        "Diffusion TV nationale",
        "Prix du public au Festival",
        "Impact social mesuré"
      ]
    },
    {
      id: 3,
      title: "Ateliers Quartiers",
      category: "Communautaire",
      description: "Ateliers d'initiation au cinéma dans les quartiers populaires pour sensibiliser et découvrir les talents.",
      image: jeunesFilmImage,
      date: "Janvier 2024 - Ongoing",
      location: "5 quartiers de Bamako",
      participants: 120,
      status: "Actif",
      highlights: [
        "Ateliers hebdomadaires",
        "Équipement mobile",
        "Projections publiques",
        "Détection de talents"
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'En cours':
        return 'bg-blue-100 text-blue-800';
      case 'Post-production':
        return 'bg-yellow-100 text-yellow-800';
      case 'Actif':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projets" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos Projets
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos initiatives concrètes pour promouvoir le cinéma et accompagner 
            les jeunes talents dans leur développement artistique et professionnel.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-3 text-blue-500" />
                    <span>{project.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-3 text-blue-500" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-3 text-blue-500" />
                    <span>{project.participants} participants</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Points forts :</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                        <span className="text-gray-700 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Play className="mr-2 h-4 w-4" />
                    Voir le projet
                  </Button>
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Plus de détails
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Vous avez un projet en tête ?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez-nous pour donner vie à vos idées cinématographiques et contribuer 
            à l'épanouissement des jeunes talents.
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
            Proposer un projet
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

