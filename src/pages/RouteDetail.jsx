import { useParams } from 'react-router-dom';
import { routesData } from '../data/index';

function RouteDetail() {
  const { id } = useParams();
  
  // Encontrar la ruta por ID
  const route = routesData.find(r => r.id === parseInt(id));

  // Si no se encuentra la ruta
  if (!route) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Route Not Found</h1>
            <p className="text-gray-600 mb-6">Sorry, we couldn't find the route you're looking for.</p>
            <a href="/routes" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Back to Routes
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header de la ruta */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url('${route.image || '/img/hero.jpg'}')` }}>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          
          <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{route.name}</h1>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {route.city}
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {route.speed}
                  </span>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="ml-1 text-gray-600">4.8 (24 reviews)</span>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-600 mb-2">{route.price}</div>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  Book This Route
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Descripción principal */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">Route Description</h2>
              <p className="text-gray-700 mb-4">{route.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Route Details</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Distance:</span>
                      <span className="font-medium">{route.distance || '45 km'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Estimated Time:</span>
                      <span className="font-medium">4-5 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Difficulty:</span>
                      <span className="font-medium">Medium</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Terrain:</span>
                      <span className="font-medium">Mixed</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">What's Included</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Professional guide
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Safety equipment
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Refreshments
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Route map
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mapa (simulado) */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Route Map</h2>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Interactive map would be displayed here</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Start: Beach Promenade</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Highlights: Lighthouse, Cliffs</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">End: Harbor</span>
              </div>
            </div>
          </div>

          {/* Panel lateral */}
          <div className="space-y-6">
            {/* Guía recomendado */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Recommended Guide</h3>
              <div className="flex items-center gap-4">
                <img 
                  src="/img/guides/Marta.webp" 
                  alt="Recommended Guide"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">Marta S.</h4>
                  <p className="text-sm text-gray-600">Mountain Biking Specialist</p>
                  <div className="flex items-center mt-1">
                    <span className="text-yellow-400 text-sm">★★★★★</span>
                    <span className="ml-1 text-xs">4.98</span>
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                View Guide Profile
              </button>
            </div>

            {/* Información adicional */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <span className="font-medium">Best Time:</span>
                  <p className="text-sm">Spring and Fall (March-May, September-November)</p>
                </div>
                <div>
                  <span className="font-medium">Meeting Point:</span>
                  <p className="text-sm">Main Beach Parking Lot</p>
                </div>
                <div>
                  <span className="font-medium">What to Bring:</span>
                  <p className="text-sm">Water bottle, sunscreen, comfortable clothing</p>
                </div>
              </div>
            </div>

            {/* Reseñas */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Reviews</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium">John D.</span>
                    <span className="text-yellow-400 text-sm">★★★★★</span>
                  </div>
                  <p className="text-sm text-gray-600">"Amazing route with stunning coastal views!"</p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium">Sarah M.</span>
                    <span className="text-yellow-400 text-sm">★★★★★</span>
                  </div>
                  <p className="text-sm text-gray-600">"Perfect for intermediate cyclists. Great guide!"</p>
                </div>
              </div>
              <button className="w-full mt-4 text-blue-600 hover:text-blue-800 transition">
                See all reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RouteDetail;