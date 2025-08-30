import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex space-x-6">
          {/* Aquí va el Link que mencionaste */}
          <Link to="/" className="font-bold text-primary hover:text-blue-700 transition">
            Home
          </Link>
          
          <Link to="/guides" className="font-medium text-gray-700 hover:text-blue-600 transition">
            Guides
          </Link>
          
          <Link to="/routes" className="font-medium text-gray-700 hover:text-blue-600 transition">
            Routes
          </Link>
          
          <Link to="/affiliates" className="font-medium text-gray-700 hover:text-blue-600 transition">
            Affiliates
          </Link>
          
          <Link to="/contact" className="font-medium text-gray-700 hover:text-blue-600 transition">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;