import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Accueil from './components/Accueil';
import Generation from './components/Generation';
import Generation0 from './components/Generation0';
import Generation1 from './components/Generation1';
import Generation2 from './components/Generation2';
import Generation3 from './components/Generation3';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Link to="/" className='a_logo_accueil'>
        <span className="logo_accueil"></span>
      </Link> */}
    
        <Routes>
          <Route index element={<Accueil />} />
          <Route path="generation" element={<Generation />} />
          <Route path="generation0" element={<Generation0 />} />
          <Route path="generation1" element={<Generation1 />} />
          <Route path="generation2" element={<Generation2 />} />
          <Route path="generation3" element={<Generation3 />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
