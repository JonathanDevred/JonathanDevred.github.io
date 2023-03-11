import './App.css';
import {
BrowserRouter as Router,
Route,
Routes
} from "react-router-dom";

import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';

function App() {

return (
<Router>
  <Routes>
    <Route exact path="/" element={<HomePage />} />
    <Route exact path="/about" element={<AboutPage />} />
    <Route exact path="/contact" element={<ContactPage />} />
    <Route exact path="/projects" element={<ProjectsPage />} />
    <Route exact path="/cv" element={<ResumePage />} />
    <Route exact path="/services" element={<ServicesPage />} />
    <Route  path="*" element={<ErrorPage />} />
  </Routes>
</Router>
)
}

export default App;