import { Link } from 'react-router-dom';

function RouteCard({ route }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={route.image} alt={route.name} className="w-full h-32 object-cover" />
      <div className="p-4">
        <h3 className="font-bold">{route.name}</h3>
        <p className="text-sm text-gray-600">{route.speed}</p>
        <p className="text-sm text-gray-600">{route.city}</p>
        <p className="font-semibold text-blue-600">{route.price}</p>
        <Link 
          to={`/routes/${route.id}`}
          className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-center w-full"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default RouteCard;