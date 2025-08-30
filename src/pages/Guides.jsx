import { useState } from 'react';
import GuideCard from '../components/GuideCard';
import { guidesData } from '../data/index';

function Guides() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  // Obtener ciudades únicas para el filtro
  const cities = ['all', ...new Set(guidesData.map(guide => guide.city))];

  const filteredGuides = guidesData
    .filter(guide => {
      const matchesSearch = guide.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           guide.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           guide.specialty.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCity = selectedCity === 'all' || guide.city === selectedCity;
      return matchesSearch && matchesCity;
    })
    .sort((a, b) => {
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      } else if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Local Guides</h1>
        
        {/* Filtros */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Search Guides</label>
              <input
                type="text"
                placeholder="Search by name, city or specialty..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Filter by City</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                {cities.map(city => (
                  <option key={city} value={city}>
                    {city === 'all' ? 'All Cities' : city}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Sort by</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="rating">Highest Rated</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="mb-4">
          <p className="text-gray-600">
            Showing {filteredGuides.length} of {guidesData.length} guides
          </p>
        </div>

        {filteredGuides.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGuides.map(guide => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600">No guides found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Guides;