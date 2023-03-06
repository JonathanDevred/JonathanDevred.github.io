import './App.css';
import {
BrowserRouter as Router,
Route,
Routes
} from "react-router-dom";
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';

function App() {

return (
<Router>
  <Routes>
    <Route exact path="/" element={<HomePage />} />
    <Route exact path="/about" element={<AboutPage />} />
    <Route exact path="/contact" element={<ContactPage />} />
    <Route exact path="*" element={<ErrorPage />} />
  </Routes>
</Router>
)
}

export default App;