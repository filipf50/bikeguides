import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import RouteCard from '../components/RouteCard';
import GuideCard from '../components/GuideCard';
import Footer from '../components/Footer';
import { routesData, guidesData } from '../data/index';
import { Link } from 'react-router-dom';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRoutes = routesData.filter((route) =>
    route.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/img/common/header_bg.avif')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find your local cycling guide</h1>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Enter a destination"
                className="px-4 py-2 rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Routes */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold mb-6">Popular Routes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredRoutes.map((route) => (
            <RouteCard key={route.id} route={route} />
          ))}
        </div>
      </section>

      {/* Become a Guide */}
      {/* Become a Guide Section */}
      <section className="mb-12 bg-white p-8 rounded-lg shadow-md flex justify-between items-center flex-wrap gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              Become a Guide
            </h2>
            <p className="text-gray-600 max-w-md">
              Share your passion for cycling and connect with cyclists from
              around the world.
            </p>
          </div>
          <Link 
            to="/register" 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Become a guide
          </Link>
          {/*<button className="px-6 py-3 bg-blue-600 text-white rounded-md text-lg hover:bg-blue-700 transition-colors">
            Sign Up
          </button>*/}
        </section>

      {/* Local Guides */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold mb-6">Local Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guidesData.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      </section>
      {/* Affiliates Section (Placeholder) */}
      <section className="bg-white p-8 rounded-lg shadow-md flex justify-between items-center flex-wrap gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              Affiliates
            </h2>
            <p className="text-gray-600 max-w-md">
              Partner with us to expand your reach.
            </p>
          </div>
          <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md text-lg hover:bg-gray-300 transition-colors">
            Contact Us
          </button>
        </section>
    </div>
  );
}

export default Home;