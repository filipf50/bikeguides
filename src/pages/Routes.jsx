import { useState } from 'react';
import RouteCard from '../components/RouteCard';
import { routesData } from '../data/index';

function Routes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('all');

  // Obtener ciudades únicas para el filtro
  const cities = ['all', ...new Set(routesData.map(route => route.city))];

  const filteredRoutes = routesData.filter(route => {
    const matchesSearch = route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         route.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = selectedCity === 'all' || route.city === selectedCity;
    return matchesSearch && matchesCity;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">All Routes</h1>
        
        {/* Filtros */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Search Routes</label>
              <input
                type="text"
                placeholder="Search by name or city..."
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
          </div>
        </div>

        {/* Resultados */}
        <div className="mb-4">
          <p className="text-gray-600">
            Showing {filteredRoutes.length} of {routesData.length} routes
          </p>
        </div>

        {filteredRoutes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRoutes.map(route => (
              <RouteCard key={route.id} route={route} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600">No routes found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Routes;