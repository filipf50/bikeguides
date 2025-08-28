function RouteCard({ route }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={route.image}
        alt={route.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="font-bold">{route.name}</h3>
      <p className="text-gray-600">{route.distance}</p>
      <p className="text-gray-600">{route.city}</p>
      <p className="font-bold text-blue-600">€{route.price}/hour</p>
    </div>
  );
}
