//import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Education from './pages/Education';
import SkillsPage from './pages/Skills';
import Projects from './pages/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Education />} />
            <Route path="skills" element={<SkillsPage />} />
            <Route path="projects" element={<Projects />} />
            {/* <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
