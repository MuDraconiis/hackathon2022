import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Accueil from './components/Accueil';
import Generation from './components/Generation';

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
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
