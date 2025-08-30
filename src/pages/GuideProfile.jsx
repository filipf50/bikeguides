import { useParams } from 'react-router-dom';
import { guidesData, routesData } from '../data/index';
import RouteCard from '../components/RouteCard';

function GuideProfile() {
  const { id } = useParams();
  
  // Encontrar el guía por ID
  const guide = guidesData.find(g => g.id === parseInt(id));
  
  // Encontrar las rutas de este guía
  const guideRoutes = routesData.filter(route => 
    guide?.routes?.some(guideRoute => guideRoute.id === route.id)
  );

  // Si no se encuentra el guía
  if (!guide) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Guide Not Found</h1>
            <p className="text-gray-600 mb-6">Sorry, we couldn't find the guide you're looking for.</p>
            <a href="/guides" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Back to Guides
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header del perfil */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url('${guide.image || '/img/hero.jpg'}')` }}>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          
          <div className="p-6 -mt-16 relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
              <div className="bg-white rounded-full p-1">
                <img 
                  src={guide.image || '/img/default-guide.jpg'} 
                  alt={guide.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white"
                />
              </div>
              
              <div className="flex-grow">
                <h1 className="text-3xl font-bold text-gray-800">{guide.name}</h1>
                <p className="text-xl text-gray-600 mb-2">{guide.specialty}</p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-xl">★★★★★</span>
                    <span className="ml-2 font-semibold">{guide.rating}</span>
                    <span className="text-gray-500 ml-1">({guide.reviews} reviews)</span>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {guide.city}
                  </span>
                </div>
              </div>
              
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition whitespace-nowrap">
                Book This Guide
              </button>
            </div>
          </div>
        </div>

        {/* Información del guía */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">About {guide.name.split(' ')[0]}</h2>
              <p className="text-gray-700 mb-4">
                I'm a passionate local cycling guide with over 10 years of experience exploring the beautiful 
                landscapes around {guide.city}. I specialize in {guide.specialty.toLowerCase()} and love 
                sharing my knowledge with fellow cycling enthusiasts.
              </p>
              <p className="text-gray-700">
                Whether you're a beginner looking for a gentle ride or an experienced cyclist seeking a challenge, 
                I can customize the perfect tour for your skill level and interests.
              </p>
            </div>

            {/* Rutas del guía */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Routes Offered</h2>
              {guideRoutes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {guideRoutes.map(route => (
                    <div key={route.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                      <h3 className="font-semibold text-lg mb-2">{route.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{route.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-600 font-semibold">{route.price}</span>
                        <span className="text-gray-500 text-sm">{route.city}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">This guide hasn't added any routes yet.</p>
              )}
            </div>
          </div>

          {/* Panel lateral */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3 text-gray-700">
                <p><span className="font-medium">Location:</span> {guide.city}</p>
                <p><span className="font-medium">Specialty:</span> {guide.specialty}</p>
                <p><span className="font-medium">Experience:</span> 10+ years</p>
                <p><span className="font-medium">Languages:</span> English, Spanish</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Availability</h3>
              <div className="space-y-2 text-gray-700">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 8:00 AM - 4:00 PM</p>
                <p>Sunday: By appointment</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Cancellation Policy</h3>
              <p className="text-gray-700 text-sm">
                Free cancellation up to 24 hours before the tour. After that, 50% fee applies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuideProfile;