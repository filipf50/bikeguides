import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import RouteCard from '../components/RouteCard';
import GuideCard from '../components/GuideCard';
import { routesData, guidesData } from '../data/index';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRoutes = routesData.filter((route) =>
    route.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <SearchBar onSearch={setSearchTerm} />

      <section className="py-12">
        <h2 className="text-2xl font-bold mb-6">Popular Routes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredRoutes.map((route) => (
            <RouteCard key={route.id} route={route} />
          ))}
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-bold mb-6">Local Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guidesData.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
