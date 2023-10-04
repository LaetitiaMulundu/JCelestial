import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
            
        <header>
            <ul>
        <li>
            <Link to="/Apropos"><span className="Primer">A propos</span></Link>
          </li>
          <li>
            <Link to="/Toutcollect"><span className="Primer">Toute la collection</span></Link>
          </li>
          <li>
            <Link to="/Colliers"><span className="Primer">Colliers</span></Link>
          </li>
          <li>
            <Link to="/Boucles"><span className="Primer">Boucles d'oreilles</span></Link>
          </li>
          <li>
            <Link to="/Bracelets"><span className="Primer">Bracelets</span></Link> 
          </li>
          <li>
            <Link to="/Inscription"><span className="Primer">S'inscrire</span></Link>
          </li>     
        </ul>
    </header>
    );
};

export default Header;