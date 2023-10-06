import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
            
        <header className='Background'>
            <ul>
              <li>
              <Link to="/"><img src="../images/logo.png" alt = "logo" className='logo'/></Link>
              </li>
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
            <Link to="/Contact"><span className="Primer">Contact</span></Link>
          </li> 

        </ul>
    </header>
    );
};

export default Header;