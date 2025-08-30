function RouteCard({ route }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={route.image} alt={route.name} className="w-full h-32 object-cover" />
      <div className="p-4">
        <h3 className="font-bold">{route.name}</h3>
        <p className="text-sm text-gray-600">{route.speed}</p>
        <p className="text-sm text-gray-600">{route.city}</p>
        <p className="font-semibold text-blue-600">{route.price}</p>
      </div>
    </div>
  );
}

export default RouteCard;