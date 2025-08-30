import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RoutesPage from './pages/Routes';
import Guides from './pages/Guides';
import GuideProfile from './pages/GuideProfile';
import RouteDetail from './pages/RouteDetail';
import RegisterGuide from './pages/RegisterGuide';
import Affiliates from './pages/Affiliates';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/routes" element={<RoutesPage />} />
            <Route path="/routes/:id" element={<RouteDetail />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/guide/:id" element={<GuideProfile />} />
            <Route path="/register" element={<RegisterGuide />} />
            <Route path="/affiliates" element={<Affiliates />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;