import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import ProjectsPage from './pages/ProjectsPage';
import HomePage from './pages/HomePage';
import ContactMePage from './pages/ContactMePage';
import Navbar from './components/Navbar';
import TravelPage from './pages/TravelPage';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/travel" element={<TravelPage />} />
            <Route path="/contact" element={<ContactMePage />} />
          </Routes>
        </main>



        <footer>
          <p>&copy; 2025 Linh Pham. All rights reserved.</p>
        </footer>
      </BrowserRouter>
    </>
  )
}

export default App;
