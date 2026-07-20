import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ProjectPage from './pages/project/ProjectPage';
import Footer from './components/Footer';
import SocialIcons from './components/SocialIcons';
import './App.css';


export default function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <header className="site-topbar">
          <nav className="site-topbar-nav" aria-label="Primary">
            <Link to="/" className="nav-link text-dark">Home</Link>
          </nav>
          <div className="site-topbar-divider" aria-hidden="true" />
          <SocialIcons className="site-topbar-socials" />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:id" element={<ProjectPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
