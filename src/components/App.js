import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import Home from './Home/Home';
import TechnicalBooks from './Technical/TechnicalBooks';
import FictionalBooks from './Fiction/FictionalBooks';
import HistoricalBooks from './History/HistoricalBooks';

export default function App() {
  return (
    <Router>    
      <Navbar expand="lg" variant="dark" bg="dark">
        <Navbar.Brand href="#">Magpie</Navbar.Brand>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/technical" element={<TechnicalBooks/>}/>
        <Route path="/fiction" element={<FictionalBooks/>}/>
        <Route path="/history" element={<HistoricalBooks/>}/>
      </Routes>
    </Router>
  );
}
