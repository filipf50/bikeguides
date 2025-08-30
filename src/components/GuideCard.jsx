import { Link } from 'react-router-dom';

function GuideCard({ guide }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={guide.image} alt={guide.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-bold">{guide.name}</h3>
        <p className="text-sm text-gray-600">{guide.specialty}</p>
        <p className="text-sm text-gray-600">{guide.city}</p>
        <div className="flex items-center mt-1">
          <span className="text-yellow-400">★★★★★</span>
          <span className="ml-1 text-sm">{guide.rating}</span>
        </div>
        <Link 
          to={`/guide/${guide.id}`}
          className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition block text-center"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}

export default GuideCard;