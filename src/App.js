//import './App.css';
import Education from './pages/Education';
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
      <Education />
      <Footer />
    </div>
  );
}

export default App;
