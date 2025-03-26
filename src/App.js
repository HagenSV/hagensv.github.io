//import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Education from './pages/Education';
import SkillsPage from './pages/Skills';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="text-center">
        <h1>Samuel V. Hagen</h1>
        <p>Full Stack Developer • Software Engineer</p>
      </header>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Education />} />
            <Route path="skills" element={<SkillsPage />} />
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
