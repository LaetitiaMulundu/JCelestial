import React from 'react';
import './template/style.scss';
import Header from './Header'; 
import Footer from './Footer'; 


const PageAccueil = () => {
  return (
  <div>
      <nav className='head'>
      <Header/>
        <div className="bottom">
        <br></br>Recommande ton sort à l'Éternel, Mets en lui ta confiance, et il agira.
         
      </div>
      
      </nav>
      <div className="container">
        <img src="/images/photosit2.jpg" alt="Couronne" className='img-head'/>
        
    <Footer/>
      </div>
    </div>
  );
};

export default PageAccueil;





