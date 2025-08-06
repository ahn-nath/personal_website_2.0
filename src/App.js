
import './App.css';
import HomePage from './pages/homepage/HomePage'; // Corrected import path
import ProjectPage from './pages/project/ProjectPage';


function App() {
    return (
        <div className="App">
          
        {/* Render the HomePage component as the main content 
           <HomePage />
        */}
        <ProjectPage/>
        </div>
    );
}

export default App;

