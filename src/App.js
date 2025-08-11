
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ProjectPage from './pages/project/ProjectPage';
import './App.css';


export default function App() {
  return (
    <BrowserRouter>
      <div className="App">

        {/* Simple header / nav — use Link instead of <a> */}
        <header className="py-3 px-4 d-flex justify-content-end">
          <nav className="d-flex gap-3 align-items-center">
            <Link to="/" className="nav-link text-dark">Home</Link>
            {/* If you want a separate projects page */}
            <Link to="/projects" className="nav-link text-dark">Projects (page)</Link>

            {/* If instead you want to scroll to a section on the homepage:
                <Link to="/#projects" className="nav-link text-dark">Projects (section)</Link>
                see the ScrollToHash helper below */}
          </nav>
        </header>

        {/* Declarative routes */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectPage />} />

            {/* Optional: 404 route */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

