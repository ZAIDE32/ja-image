import React, { useState } from 'react';
import { Play, Image, Calendar, Eye, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import formationImage from '../assets/formation-cinema-jeunes.jpg';
import tournageImage from '../assets/jeunes-tournage.jpg';
import amboiseImage from '../assets/jeunes-film-amboise.jpg';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);

  const filters = [
    { id: 'all', label: 'Tout voir', count: 24 },
    { id: 'formations', label: 'Formations', count: 8 },
    { id: 'tournages', label: 'Tournages', count: 10 },
    { id: 'evenements', label: 'Événements', count: 6 }
  ];

  const mediaItems = [
    {
      id: 1,
      type: 'image',
      category: 'formations',
      title: 'Formation Ciné Cour School 2024',
      description: 'Atelier pratique de prise de vue avec les participants de la formation intensive.',
      image: formationImage,
      date: '2024-03-15',
      views: 245
    },
    {
      id: 2,
      type: 'video',
      category: 'tournages',
      title: 'Tournage "Voix de la Jeunesse"',
      description: 'Behind the scenes du tournage de notre série documentaire sur les jeunes.',
      image: tournageImage,
      date: '2024-05-20',
      views: 892,
      duration: '3:24'
    },
    {
      id: 3,
      type: 'image',
      category: 'evenements',
      title: 'Festival du Film Jeune Amboise',
      description: 'Participation de nos jeunes talents au festival international.',
      image: amboiseImage,
      date: '2024-07-10',
      views: 156
    },
    {
      id: 4,
      type: 'video',
      category: 'formations',
      title: 'Masterclass Direction d\'Acteurs',
      description: 'Session spéciale avec un réalisateur professionnel.',
      image: formationImage,
      date: '2024-04-08',
      views: 423,
      duration: '12:45'
    },
    {
      id: 5,
      type: 'image',
      category: 'tournages',
      title: 'Plateau de "Rêves d\'Enfants"',
      description: 'Court-métrage réalisé entièrement par nos participants.',
      image: tournageImage,
      date: '2024-06-12',
      views: 334
    },
    {
      id: 6,
      type: 'video',
      category: 'evenements',
      title: 'Cérémonie de Remise des Diplômes',
      description: 'Moment émouvant de la graduation de la promotion 2024.',
      image: amboiseImage,
      date: '2024-06-30',
      views: 567,
      duration: '8:15'
    },
    {
      id: 7,
      type: 'image',
      category: 'formations',
      title: 'Atelier Montage Vidéo',
      description: 'Apprentissage des techniques de post-production.',
      image: formationImage,
      date: '2024-02-28',
      views: 198
    },
    {
      id: 8,
      type: 'image',
      category: 'tournages',
      title: 'Équipe de Production Mobile',
      description: 'Notre équipe en action dans les quartiers de Bamako.',
      image: tournageImage,
      date: '2024-01-15',
      views: 289
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeFilter);

  const openModal = (item) => {
    setSelectedMedia(item);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <section id="galerie" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Galerie
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez en images et en vidéos nos formations, tournages et événements. 
            Plongez dans l'univers créatif de JA IMAGE et de nos jeunes talents.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Filter className="inline h-4 w-4 mr-2" />
              {filter.label}
              <span className="ml-2 text-sm opacity-75">({filter.count})</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openModal(item)}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-sm mb-1 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-xs line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Media Type Icon */}
                <div className="absolute top-4 left-4">
                  {item.type === 'video' ? (
                    <div className="bg-red-500 text-white p-2 rounded-full">
                      <Play className="h-4 w-4" />
                    </div>
                  ) : (
                    <div className="bg-blue-500 text-white p-2 rounded-full">
                      <Image className="h-4 w-4" />
                    </div>
                  )}
                </div>

                {/* Duration for videos */}
                {item.type === 'video' && item.duration && (
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {item.duration}
                  </div>
                )}

                {/* Views */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center">
                  <Eye className="h-3 w-3 mr-1" />
                  {item.views}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(item.date).toLocaleDateString('fr-FR')}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.category === 'formations' ? 'bg-blue-100 text-blue-800' :
                    item.category === 'tournages' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {filters.find(f => f.id === item.category)?.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            Charger plus de contenu
          </Button>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Photos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">120+</div>
              <div className="text-blue-100">Vidéos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25</div>
              <div className="text-blue-100">Films produits</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50k+</div>
              <div className="text-blue-100">Vues totales</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Media */}
            <div className="relative">
              {selectedMedia.type === 'video' ? (
                <div className="aspect-video bg-black flex items-center justify-center">
                  <div className="text-white text-center">
                    <Play className="h-16 w-16 mx-auto mb-4" />
                    <p>Vidéo : {selectedMedia.title}</p>
                    <p className="text-sm opacity-75">Durée : {selectedMedia.duration}</p>
                  </div>
                </div>
              ) : (
                <img
                  src={selectedMedia.image}
                  alt={selectedMedia.title}
                  className="w-full max-h-[60vh] object-contain"
                />
              )}
            </div>

            {/* Info */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedMedia.title}
              </h3>
              <p className="text-gray-700 mb-4">
                {selectedMedia.description}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(selectedMedia.date).toLocaleDateString('fr-FR')}
                </span>
                <span className="flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  {selectedMedia.views} vues
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

