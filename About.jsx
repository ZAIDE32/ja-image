import React from 'react';
import { Heart, Target, Users, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "Nous croyons en la force du cinéma pour transformer les vies et exprimer la créativité des jeunes."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet, formation et accompagnement que nous proposons."
    },
    {
      icon: Users,
      title: "Inclusion",
      description: "Nous ouvrons les portes du cinéma à tous les jeunes, quels que soient leur origine et leur parcours."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Nous encourageons l'innovation et les nouvelles approches dans l'apprentissage cinématographique."
    }
  ];

  return (
    <section id="association" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Qui sommes-nous ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            JA IMAGE est une association dédiée à la promotion du cinéma et à l'accompagnement 
            des jeunes autodidactes dans leur parcours cinématographique.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Notre Mission
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Fondée avec la conviction que le cinéma est un puissant vecteur d'expression et de transformation sociale, 
              JA IMAGE œuvre pour démocratiser l'accès aux métiers du cinéma et offrir aux jeunes talents les outils 
              nécessaires pour développer leur potentiel créatif.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Nous croyons que chaque jeune, indépendamment de son parcours académique traditionnel, possède une 
              créativité unique qui mérite d'être cultivée et valorisée dans le domaine cinématographique.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4 mt-1">
                  <Target className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Formation pratique</h4>
                  <p className="text-gray-600">Ateliers hands-on avec du matériel professionnel</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-100 p-2 rounded-lg mr-4 mt-1">
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Accompagnement personnalisé</h4>
                  <p className="text-gray-600">Mentorat individuel par des professionnels du secteur</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4 mt-1">
                  <Lightbulb className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Projets collaboratifs</h4>
                  <p className="text-gray-600">Réalisation de films en équipe avec distribution</p>
                </div>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              En savoir plus sur notre histoire
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Nos Valeurs</h4>
              <div className="grid grid-cols-2 gap-6">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="bg-white/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h5 className="font-semibold mb-2">{value.title}</h5>
                      <p className="text-sm opacity-90">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Notre Équipe
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Une équipe passionnée de professionnels du cinéma, d'éducateurs et de bénévoles 
            unis par la même vision : révéler les talents de demain.
          </p>
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            Rencontrer l'équipe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;

