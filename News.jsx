import React from 'react';
import { Calendar, User, ArrowRight, Tag, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import formationImage from '../assets/formation-cinema-jeunes.jpg';
import tournageImage from '../assets/jeunes-tournage.jpg';
import amboiseImage from '../assets/jeunes-film-amboise.jpg';

const News = () => {
  const featuredArticle = {
    id: 1,
    title: "JA IMAGE remporte le Prix de l'Innovation Pédagogique 2024",
    excerpt: "Notre approche unique de formation cinématographique pour jeunes autodidactes a été reconnue au niveau national lors du Forum de l'Éducation Créative.",
    content: "Cette reconnaissance prestigieuse récompense notre méthode d'apprentissage pratique qui combine formation technique, accompagnement personnalisé et réalisation de projets concrets. Le jury a particulièrement salué notre capacité à révéler les talents cachés et à offrir une alternative crédible aux parcours traditionnels.",
    image: formationImage,
    date: '2024-07-15',
    author: 'Équipe JA IMAGE',
    category: 'Reconnaissance',
    readTime: '5 min',
    comments: 23,
    featured: true
  };

  const articles = [
    {
      id: 2,
      title: "Nouvelle promotion Ciné Cour School : 30 jeunes talents sélectionnés",
      excerpt: "Découvrez les profils exceptionnels de notre nouvelle promotion qui débutera en septembre 2024.",
      image: tournageImage,
      date: '2024-07-10',
      author: 'Sarah Konaté',
      category: 'Formation',
      readTime: '3 min',
      comments: 15
    },
    {
      id: 3,
      title: "Festival International du Film Jeune : nos participants brillent",
      excerpt: "Trois films réalisés par nos apprenants ont été sélectionnés en compétition officielle.",
      image: amboiseImage,
      date: '2024-07-05',
      author: 'Ibrahim Diarra',
      category: 'Événement',
      readTime: '4 min',
      comments: 31
    },
    {
      id: 4,
      title: "Partenariat avec Canal+ Afrique pour la diffusion de nos productions",
      excerpt: "Un accord historique qui ouvre de nouvelles perspectives pour nos jeunes réalisateurs.",
      image: formationImage,
      date: '2024-06-28',
      author: 'Direction JA IMAGE',
      category: 'Partenariat',
      readTime: '6 min',
      comments: 42
    },
    {
      id: 5,
      title: "Masterclass exceptionnelle avec Alain Gomis, réalisateur franco-sénégalais",
      excerpt: "Une session inspirante sur la narration africaine contemporaine au cinéma.",
      image: tournageImage,
      date: '2024-06-20',
      author: 'Aminata Traoré',
      category: 'Masterclass',
      readTime: '4 min',
      comments: 18
    },
    {
      id: 6,
      title: "Lancement du programme 'Cinéma Mobile' dans les zones rurales",
      excerpt: "Initiative pour démocratiser l'accès à la formation cinématographique hors de Bamako.",
      image: amboiseImage,
      date: '2024-06-15',
      author: 'Équipe Mobile',
      category: 'Initiative',
      readTime: '5 min',
      comments: 27
    }
  ];

  const categories = [
    { name: 'Toutes', count: 25, active: true },
    { name: 'Formation', count: 8 },
    { name: 'Événement', count: 6 },
    { name: 'Partenariat', count: 4 },
    { name: 'Reconnaissance', count: 3 },
    { name: 'Initiative', count: 4 }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Formation': 'bg-blue-100 text-blue-800',
      'Événement': 'bg-green-100 text-green-800',
      'Partenariat': 'bg-purple-100 text-purple-800',
      'Reconnaissance': 'bg-yellow-100 text-yellow-800',
      'Initiative': 'bg-red-100 text-red-800',
      'Masterclass': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="actualites" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Actualités
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Suivez l'actualité de JA IMAGE, nos dernières réalisations, événements 
            et les succès de nos jeunes talents dans le monde du cinéma.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category.active
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-80 lg:h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  À la une
                </span>
              </div>
            </div>
            
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredArticle.category)}`}>
                  {featuredArticle.category}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(featuredArticle.date).toLocaleDateString('fr-FR')}
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                {featuredArticle.title}
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {featuredArticle.content}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500 text-sm space-x-4">
                  <span className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {featuredArticle.author}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredArticle.readTime}
                  </span>
                  <span className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    {featuredArticle.comments}
                  </span>
                </div>
                
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Lire l'article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(article.date).toLocaleDateString('fr-FR')}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors cursor-pointer">
                  {article.title}
                </h3>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm space-x-3">
                    <span className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {article.author}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.readTime}
                    </span>
                  </div>
                  
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
                    Lire plus
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Restez informé de nos actualités
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Recevez notre newsletter mensuelle avec nos dernières nouvelles, 
            opportunités de formation et succès de nos participants.
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6">
              S'abonner
            </Button>
          </div>
          
          <p className="text-sm opacity-75 mt-4">
            Pas de spam, désinscription possible à tout moment
          </p>
        </div>

        {/* Archive Link */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            Voir toutes les actualités
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;

