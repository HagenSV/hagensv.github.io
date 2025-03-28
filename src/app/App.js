//import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Education from './pages/Education';
import SkillsPage from './pages/Skills';
import Projects from './pages/Projects';
import { ProjectDetails } from './pages/ProjectDetails'; // Import the ProjectDetails component
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import projects from '../projects/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Education />} />
            <Route path="skills" element={<SkillsPage />} />
            <Route path="projects">
              <Route index element={<Projects />} />
              {Object.keys(projects).map((key) => (
                <Route path={key} element={<ProjectDetails project={projects[key]} />} />
              ))}
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
