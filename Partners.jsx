import React from 'react';
import { Star, Users, Handshake, Award, ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Partners = () => {
  const partnerCategories = [
    {
      title: "Partenaires Institutionnels",
      description: "Organismes publics et institutions qui soutiennent notre mission",
      partners: [
        {
          name: "Ministère de la Culture du Mali",
          logo: "🏛️",
          description: "Soutien institutionnel et reconnaissance officielle de nos programmes",
          partnership: "Depuis 2020",
          type: "Institutionnel"
        },
        {
          name: "Centre National du Cinéma (CNC)",
          logo: "🎬",
          description: "Financement de projets et expertise technique",
          partnership: "Depuis 2021",
          type: "Institutionnel"
        },
        {
          name: "UNESCO Mali",
          logo: "🌍",
          description: "Promotion de la diversité culturelle et éducation artistique",
          partnership: "Depuis 2022",
          type: "International"
        }
      ]
    },
    {
      title: "Partenaires Médias",
      description: "Chaînes et plateformes qui diffusent nos productions",
      partners: [
        {
          name: "Canal+ Afrique",
          logo: "📺",
          description: "Diffusion de nos productions et opportunités pour nos talents",
          partnership: "Depuis 2024",
          type: "Média"
        },
        {
          name: "ORTM (Office de Radiodiffusion Télévision du Mali)",
          logo: "📻",
          description: "Partenaire historique pour la diffusion locale",
          partnership: "Depuis 2019",
          type: "Média"
        },
        {
          name: "Africa24",
          logo: "🌍",
          description: "Couverture médiatique de nos événements",
          partnership: "Depuis 2023",
          type: "Média"
        }
      ]
    },
    {
      title: "Partenaires Techniques",
      description: "Entreprises fournissant équipements et expertise technique",
      partners: [
        {
          name: "Blackmagic Design",
          logo: "🎥",
          description: "Équipements de tournage et post-production professionnels",
          partnership: "Depuis 2022",
          type: "Technique"
        },
        {
          name: "Adobe Creative Cloud",
          logo: "🎨",
          description: "Licences logiciels pour la formation et production",
          partnership: "Depuis 2021",
          type: "Logiciel"
        },
        {
          name: "Panasonic Professional",
          logo: "📹",
          description: "Caméras et équipements audio professionnels",
          partnership: "Depuis 2023",
          type: "Technique"
        }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Aminata Dramane Traoré",
      position: "Directrice, UNESCO Mali",
      text: "JA IMAGE incarne parfaitement notre vision d'une éducation créative accessible à tous. Leur approche innovante transforme véritablement la vie des jeunes.",
      rating: 5
    },
    {
      name: "Jean-Luc Azoulay",
      position: "Directeur des Programmes, Canal+ Afrique",
      text: "La qualité des productions réalisées par les participants de JA IMAGE nous a immédiatement convaincus. C'est un vivier de talents exceptionnels.",
      rating: 5
    },
    {
      name: "Mamadou Kassé",
      position: "Ministre de la Culture du Mali",
      text: "JA IMAGE contribue significativement au rayonnement culturel de notre pays et à la formation de la nouvelle génération de cinéastes maliens.",
      rating: 5
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: "Visibilité accrue",
      description: "Associez votre marque à l'excellence et à l'innovation dans l'éducation cinématographique"
    },
    {
      icon: Users,
      title: "Impact social",
      description: "Contribuez directement à l'épanouissement et à l'insertion professionnelle des jeunes"
    },
    {
      icon: Award,
      title: "Reconnaissance",
      description: "Bénéficiez de la reconnaissance publique de votre engagement sociétal"
    },
    {
      icon: Handshake,
      title: "Réseau professionnel",
      description: "Accédez à un réseau unique de talents émergents et de professionnels du secteur"
    }
  ];

  const partnershipLevels = [
    {
      level: "Partenaire Bronze",
      price: "500 000 FCFA/an",
      benefits: [
        "Logo sur notre site web",
        "Mention dans nos communications",
        "Accès aux événements publics",
        "Rapport d'impact annuel"
      ],
      color: "from-amber-600 to-amber-700"
    },
    {
      level: "Partenaire Argent",
      price: "1 500 000 FCFA/an",
      benefits: [
        "Tous les avantages Bronze",
        "Logo sur nos supports de formation",
        "Participation aux jurys",
        "Accès privilégié aux talents",
        "Événement dédié annuel"
      ],
      color: "from-gray-400 to-gray-600",
      popular: true
    },
    {
      level: "Partenaire Or",
      price: "3 000 000 FCFA/an",
      benefits: [
        "Tous les avantages Argent",
        "Co-branding sur projets majeurs",
        "Masterclass dédiée",
        "Recrutement prioritaire",
        "Conseil stratégique"
      ],
      color: "from-yellow-400 to-yellow-600"
    }
  ];

  return (
    <section id="partenaires" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos Partenaires
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            JA IMAGE s'appuie sur un écosystème de partenaires engagés qui partagent 
            notre vision d'un cinéma accessible et formateur pour tous les jeunes talents.
          </p>
        </div>

        {/* Partner Categories */}
        <div className="space-y-16 mb-20">
          {partnerCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {category.partners.map((partner, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                    <div className="text-6xl mb-4">{partner.logo}</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {partner.name}
                    </h4>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {partner.description}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        {partner.type}
                      </span>
                      <span className="text-gray-500">
                        {partner.partnership}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Ce que disent nos partenaires
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-blue-500 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Pourquoi devenir partenaire ?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partnership Levels */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Niveaux de partenariat
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {partnershipLevels.map((level, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${level.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {level.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center py-2 text-sm font-medium">
                    Le plus populaire
                  </div>
                )}
                
                <div className={`bg-gradient-to-r ${level.color} p-6 text-white ${level.popular ? 'pt-12' : ''}`}>
                  <h4 className="text-2xl font-bold mb-2">{level.level}</h4>
                  <p className="text-3xl font-bold">{level.price}</p>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-3">
                    {level.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Choisir ce niveau
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Rejoignez notre communauté de partenaires
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ensemble, construisons l'avenir du cinéma africain en donnant aux jeunes 
            talents les moyens de s'exprimer et de réussir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Télécharger le dossier partenariat
            </Button>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <ArrowRight className="mr-2 h-5 w-5" />
              Nous contacter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

