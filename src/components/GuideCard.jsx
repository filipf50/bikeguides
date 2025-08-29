function GuideCard({ guide }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={guide.image}
        alt={guide.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="font-bold mt-2">{guide.name}</h3>
      <p className="text-gray-600">{guide.specialty}</p>
      <p className="text-gray-600">{guide.city}</p>
      <div className="flex items-center mt-1">
        <span className="text-yellow-400">★★★★★</span>
        <span className="ml-1 text-sm">{guide.rating}</span>
      </div>
      <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        View Profile
      </button>
    </div>
  );
}
export default GuideCard;
