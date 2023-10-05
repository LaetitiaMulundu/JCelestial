import React from 'react';
import './template/style.scss';
import Header from './Header';
import Footer from './Footer';
import BasPage from './BasPage';

const Colliers = () => {
  return (
    <div>
    <nav className='head'>
    <Header/>
    <img src="images/CollierS-E.jpeg" alt="Collier Saint-Esprit" className='SE'/>
    <img src="images/colliersJesus.jpeg" alt="Collier Jesus" className='Jesus'/>
    
    </nav>
     
      <Footer/>
      <BasPage/>
       
  </div>
);
};

export default Colliers;