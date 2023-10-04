import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Apropos from './Components/Apropos';
import Toutcollect from './Components/Toutcollect';
import Colliers from './Components/Colliers';
import Boucles from './Components/Boucles';
import Bracelets from './Components/Bracelets';
import PageAccueil from './Components/PageAccueil';
import './Components/template/style.scss';
//import MonImage from '././images/photosite.jpeg'; 





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/PageAccueil" element={<PageAccueil />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/Toutcollect" element={<Toutcollect />} />
        <Route path="/Colliers" element={<Colliers />} />
        <Route path="/Boucles" element={<Boucles />} />
        <Route path="/Bracelets" element={<Bracelets />} />
      </Routes>
    </Router>
  );
}

export default App;